package keeper

import (
	"encoding/binary"
	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetSampleTypeCount get the total number of sampleType
func (k Keeper) GetSampleTypeCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeCountKey))
	byteKey := types.KeyPrefix(types.SampleTypeCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetSampleTypeCount set the total number of sampleType
func (k Keeper) SetSampleTypeCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeCountKey))
	byteKey := types.KeyPrefix(types.SampleTypeCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSampleType appends a sampleType in the store with a new id and update the count
func (k Keeper) AppendSampleType(
	ctx sdk.Context,
	creator string,
	sampleField1 string,
	sampleField2 string,
	sampleField3 string,
) uint64 {
	// Create the sampleType
	count := k.GetSampleTypeCount(ctx)
	var sampleType = types.SampleType{
		Creator:      creator,
		Id:           count,
		SampleField1: sampleField1,
		SampleField2: sampleField2,
		SampleField3: sampleField3,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	value := k.cdc.MustMarshalBinaryBare(&sampleType)
	store.Set(GetSampleTypeIDBytes(sampleType.Id), value)

	// Update sampleType count
	k.SetSampleTypeCount(ctx, count+1)

	return count
}

// SetSampleType set a specific sampleType in the store
func (k Keeper) SetSampleType(ctx sdk.Context, sampleType types.SampleType) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	b := k.cdc.MustMarshalBinaryBare(&sampleType)
	store.Set(GetSampleTypeIDBytes(sampleType.Id), b)
}

// GetSampleType returns a sampleType from its id
func (k Keeper) GetSampleType(ctx sdk.Context, id uint64) types.SampleType {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	var sampleType types.SampleType
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSampleTypeIDBytes(id)), &sampleType)
	return sampleType
}

// HasSampleType checks if the sampleType exists in the store
func (k Keeper) HasSampleType(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	return store.Has(GetSampleTypeIDBytes(id))
}

// GetSampleTypeOwner returns the creator of the sampleType
func (k Keeper) GetSampleTypeOwner(ctx sdk.Context, id uint64) string {
	return k.GetSampleType(ctx, id).Creator
}

// RemoveSampleType removes a sampleType from the store
func (k Keeper) RemoveSampleType(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	store.Delete(GetSampleTypeIDBytes(id))
}

// GetAllSampleType returns all sampleType
func (k Keeper) GetAllSampleType(ctx sdk.Context) (list []types.SampleType) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SampleType
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSampleTypeIDBytes returns the byte representation of the ID
func GetSampleTypeIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSampleTypeIDFromBytes returns ID in uint64 format from a byte array
func GetSampleTypeIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

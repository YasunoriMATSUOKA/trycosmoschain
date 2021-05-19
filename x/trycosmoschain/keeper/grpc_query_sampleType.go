package keeper

import (
	"context"

	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SampleTypeAll(c context.Context, req *types.QueryAllSampleTypeRequest) (*types.QueryAllSampleTypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sampleTypes []*types.SampleType
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sampleTypeStore := prefix.NewStore(store, types.KeyPrefix(types.SampleTypeKey))

	pageRes, err := query.Paginate(sampleTypeStore, req.Pagination, func(key []byte, value []byte) error {
		var sampleType types.SampleType
		if err := k.cdc.UnmarshalBinaryBare(value, &sampleType); err != nil {
			return err
		}

		sampleTypes = append(sampleTypes, &sampleType)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSampleTypeResponse{SampleType: sampleTypes, Pagination: pageRes}, nil
}

func (k Keeper) SampleType(c context.Context, req *types.QueryGetSampleTypeRequest) (*types.QueryGetSampleTypeResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sampleType types.SampleType
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSampleType(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SampleTypeKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSampleTypeIDBytes(req.Id)), &sampleType)

	return &types.QueryGetSampleTypeResponse{SampleType: &sampleType}, nil
}

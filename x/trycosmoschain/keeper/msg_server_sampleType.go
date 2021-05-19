package keeper

import (
	"context"
	"fmt"

	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSampleType(goCtx context.Context, msg *types.MsgCreateSampleType) (*types.MsgCreateSampleTypeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendSampleType(
		ctx,
		msg.Creator,
		msg.SampleField1,
		msg.SampleField2,
		msg.SampleField3,
	)

	return &types.MsgCreateSampleTypeResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSampleType(goCtx context.Context, msg *types.MsgUpdateSampleType) (*types.MsgUpdateSampleTypeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var sampleType = types.SampleType{
		Creator:      msg.Creator,
		Id:           msg.Id,
		SampleField1: msg.SampleField1,
		SampleField2: msg.SampleField2,
		SampleField3: msg.SampleField3,
	}

	// Checks that the element exists
	if !k.HasSampleType(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSampleTypeOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSampleType(ctx, sampleType)

	return &types.MsgUpdateSampleTypeResponse{}, nil
}

func (k msgServer) DeleteSampleType(goCtx context.Context, msg *types.MsgDeleteSampleType) (*types.MsgDeleteSampleTypeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSampleType(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSampleTypeOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSampleType(ctx, msg.Id)

	return &types.MsgDeleteSampleTypeResponse{}, nil
}

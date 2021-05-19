package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSampleType{}

func NewMsgCreateSampleType(creator string, sampleField1 string, sampleField2 string, sampleField3 string) *MsgCreateSampleType {
	return &MsgCreateSampleType{
		Creator:      creator,
		SampleField1: sampleField1,
		SampleField2: sampleField2,
		SampleField3: sampleField3,
	}
}

func (msg *MsgCreateSampleType) Route() string {
	return RouterKey
}

func (msg *MsgCreateSampleType) Type() string {
	return "CreateSampleType"
}

func (msg *MsgCreateSampleType) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSampleType) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSampleType) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSampleType{}

func NewMsgUpdateSampleType(creator string, id uint64, sampleField1 string, sampleField2 string, sampleField3 string) *MsgUpdateSampleType {
	return &MsgUpdateSampleType{
		Id:           id,
		Creator:      creator,
		SampleField1: sampleField1,
		SampleField2: sampleField2,
		SampleField3: sampleField3,
	}
}

func (msg *MsgUpdateSampleType) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSampleType) Type() string {
	return "UpdateSampleType"
}

func (msg *MsgUpdateSampleType) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSampleType) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSampleType) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateSampleType{}

func NewMsgDeleteSampleType(creator string, id uint64) *MsgDeleteSampleType {
	return &MsgDeleteSampleType{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSampleType) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSampleType) Type() string {
	return "DeleteSampleType"
}

func (msg *MsgDeleteSampleType) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSampleType) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSampleType) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

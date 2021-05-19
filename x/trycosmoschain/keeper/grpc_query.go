package keeper

import (
	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
)

var _ types.QueryServer = Keeper{}

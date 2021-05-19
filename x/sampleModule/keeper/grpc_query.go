package keeper

import (
	"github.com/YasunoriMATSUOKA/trycosmoschain/x/sampleModule/types"
)

var _ types.QueryServer = Keeper{}

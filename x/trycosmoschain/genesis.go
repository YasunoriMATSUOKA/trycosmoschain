package trycosmoschain

import (
	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/keeper"
	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the sampleType
	for _, elem := range genState.SampleTypeList {
		k.SetSampleType(ctx, *elem)
	}

	// Set sampleType count
	k.SetSampleTypeCount(ctx, uint64(len(genState.SampleTypeList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all sampleType
	sampleTypeList := k.GetAllSampleType(ctx)
	for _, elem := range sampleTypeList {
		elem := elem
		genesis.SampleTypeList = append(genesis.SampleTypeList, &elem)
	}

	return genesis
}

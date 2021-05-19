package main

import (
	"os"

	"github.com/YasunoriMATSUOKA/trycosmoschain/app"
	"github.com/YasunoriMATSUOKA/trycosmoschain/cmd/trycosmoschaind/cmd"
	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}

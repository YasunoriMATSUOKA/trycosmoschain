package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateSampleType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-sampleType [sampleField1] [sampleField2] [sampleField3]",
		Short: "Creates a new sampleType",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsSampleField1 := string(args[0])
			argsSampleField2 := string(args[1])
			argsSampleField3 := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSampleType(clientCtx.GetFromAddress().String(), string(argsSampleField1), string(argsSampleField2), string(argsSampleField3))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSampleType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-sampleType [id] [sampleField1] [sampleField2] [sampleField3]",
		Short: "Update a sampleType",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsSampleField1 := string(args[1])
			argsSampleField2 := string(args[2])
			argsSampleField3 := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSampleType(clientCtx.GetFromAddress().String(), id, string(argsSampleField1), string(argsSampleField2), string(argsSampleField3))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSampleType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-sampleType [id] [sampleField1] [sampleField2] [sampleField3]",
		Short: "Delete a sampleType by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSampleType(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

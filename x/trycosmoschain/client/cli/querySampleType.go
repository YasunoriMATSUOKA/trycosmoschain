package cli

import (
	"context"
	"strconv"

	"github.com/YasunoriMATSUOKA/trycosmoschain/x/trycosmoschain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListSampleType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-sampleType",
		Short: "list all sampleType",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSampleTypeRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SampleTypeAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowSampleType() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-sampleType [id]",
		Short: "shows a sampleType",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetSampleTypeRequest{
				Id: id,
			}

			res, err := queryClient.SampleType(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

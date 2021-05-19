// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSampleType } from "./types/trycosmoschain/tx";
import { MsgCreateSampleType } from "./types/trycosmoschain/tx";
import { MsgDeleteSampleType } from "./types/trycosmoschain/tx";


const types = [
  ["/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgUpdateSampleType", MsgUpdateSampleType],
  ["/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgCreateSampleType", MsgCreateSampleType],
  ["/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgDeleteSampleType", MsgDeleteSampleType],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgUpdateSampleType: (data: MsgUpdateSampleType): EncodeObject => ({ typeUrl: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgUpdateSampleType", value: data }),
    msgCreateSampleType: (data: MsgCreateSampleType): EncodeObject => ({ typeUrl: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgCreateSampleType", value: data }),
    msgDeleteSampleType: (data: MsgDeleteSampleType): EncodeObject => ({ typeUrl: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgDeleteSampleType", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};

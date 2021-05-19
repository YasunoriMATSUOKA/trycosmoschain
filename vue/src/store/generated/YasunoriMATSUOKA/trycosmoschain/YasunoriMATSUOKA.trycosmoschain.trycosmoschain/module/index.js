// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSampleType } from "./types/trycosmoschain/tx";
import { MsgCreateSampleType } from "./types/trycosmoschain/tx";
import { MsgDeleteSampleType } from "./types/trycosmoschain/tx";
const types = [
    ["/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgUpdateSampleType", MsgUpdateSampleType],
    ["/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgCreateSampleType", MsgCreateSampleType],
    ["/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgDeleteSampleType", MsgDeleteSampleType],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgUpdateSampleType: (data) => ({ typeUrl: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgUpdateSampleType", value: data }),
        msgCreateSampleType: (data) => ({ typeUrl: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgCreateSampleType", value: data }),
        msgDeleteSampleType: (data) => ({ typeUrl: "/YasunoriMATSUOKA.trycosmoschain.trycosmoschain.MsgDeleteSampleType", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

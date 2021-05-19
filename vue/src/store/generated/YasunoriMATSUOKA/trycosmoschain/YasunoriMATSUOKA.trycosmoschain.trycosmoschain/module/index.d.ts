import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSampleType } from "./types/trycosmoschain/tx";
import { MsgCreateSampleType } from "./types/trycosmoschain/tx";
import { MsgDeleteSampleType } from "./types/trycosmoschain/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateSampleType: (data: MsgUpdateSampleType) => EncodeObject;
    msgCreateSampleType: (data: MsgCreateSampleType) => EncodeObject;
    msgDeleteSampleType: (data: MsgDeleteSampleType) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

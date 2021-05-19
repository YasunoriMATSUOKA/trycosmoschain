import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSampleType {
    creator: string;
    sampleField1: string;
    sampleField2: string;
    sampleField3: string;
}
export interface MsgCreateSampleTypeResponse {
    id: number;
}
export interface MsgUpdateSampleType {
    creator: string;
    id: number;
    sampleField1: string;
    sampleField2: string;
    sampleField3: string;
}
export interface MsgUpdateSampleTypeResponse {
}
export interface MsgDeleteSampleType {
    creator: string;
    id: number;
}
export interface MsgDeleteSampleTypeResponse {
}
export declare const MsgCreateSampleType: {
    encode(message: MsgCreateSampleType, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSampleType;
    fromJSON(object: any): MsgCreateSampleType;
    toJSON(message: MsgCreateSampleType): unknown;
    fromPartial(object: DeepPartial<MsgCreateSampleType>): MsgCreateSampleType;
};
export declare const MsgCreateSampleTypeResponse: {
    encode(message: MsgCreateSampleTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSampleTypeResponse;
    fromJSON(object: any): MsgCreateSampleTypeResponse;
    toJSON(message: MsgCreateSampleTypeResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSampleTypeResponse>): MsgCreateSampleTypeResponse;
};
export declare const MsgUpdateSampleType: {
    encode(message: MsgUpdateSampleType, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSampleType;
    fromJSON(object: any): MsgUpdateSampleType;
    toJSON(message: MsgUpdateSampleType): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSampleType>): MsgUpdateSampleType;
};
export declare const MsgUpdateSampleTypeResponse: {
    encode(_: MsgUpdateSampleTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSampleTypeResponse;
    fromJSON(_: any): MsgUpdateSampleTypeResponse;
    toJSON(_: MsgUpdateSampleTypeResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSampleTypeResponse>): MsgUpdateSampleTypeResponse;
};
export declare const MsgDeleteSampleType: {
    encode(message: MsgDeleteSampleType, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSampleType;
    fromJSON(object: any): MsgDeleteSampleType;
    toJSON(message: MsgDeleteSampleType): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSampleType>): MsgDeleteSampleType;
};
export declare const MsgDeleteSampleTypeResponse: {
    encode(_: MsgDeleteSampleTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSampleTypeResponse;
    fromJSON(_: any): MsgDeleteSampleTypeResponse;
    toJSON(_: MsgDeleteSampleTypeResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSampleTypeResponse>): MsgDeleteSampleTypeResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateSampleType(request: MsgCreateSampleType): Promise<MsgCreateSampleTypeResponse>;
    UpdateSampleType(request: MsgUpdateSampleType): Promise<MsgUpdateSampleTypeResponse>;
    DeleteSampleType(request: MsgDeleteSampleType): Promise<MsgDeleteSampleTypeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSampleType(request: MsgCreateSampleType): Promise<MsgCreateSampleTypeResponse>;
    UpdateSampleType(request: MsgUpdateSampleType): Promise<MsgUpdateSampleTypeResponse>;
    DeleteSampleType(request: MsgDeleteSampleType): Promise<MsgDeleteSampleTypeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

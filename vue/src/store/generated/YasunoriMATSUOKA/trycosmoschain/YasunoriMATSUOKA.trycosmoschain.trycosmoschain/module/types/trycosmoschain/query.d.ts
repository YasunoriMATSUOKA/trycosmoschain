import { Reader, Writer } from "protobufjs/minimal";
import { SampleType } from "../trycosmoschain/sampleType";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetSampleTypeRequest {
    id: number;
}
export interface QueryGetSampleTypeResponse {
    SampleType: SampleType | undefined;
}
export interface QueryAllSampleTypeRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSampleTypeResponse {
    SampleType: SampleType[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSampleTypeRequest: {
    encode(message: QueryGetSampleTypeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSampleTypeRequest;
    fromJSON(object: any): QueryGetSampleTypeRequest;
    toJSON(message: QueryGetSampleTypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSampleTypeRequest>): QueryGetSampleTypeRequest;
};
export declare const QueryGetSampleTypeResponse: {
    encode(message: QueryGetSampleTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSampleTypeResponse;
    fromJSON(object: any): QueryGetSampleTypeResponse;
    toJSON(message: QueryGetSampleTypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSampleTypeResponse>): QueryGetSampleTypeResponse;
};
export declare const QueryAllSampleTypeRequest: {
    encode(message: QueryAllSampleTypeRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSampleTypeRequest;
    fromJSON(object: any): QueryAllSampleTypeRequest;
    toJSON(message: QueryAllSampleTypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSampleTypeRequest>): QueryAllSampleTypeRequest;
};
export declare const QueryAllSampleTypeResponse: {
    encode(message: QueryAllSampleTypeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSampleTypeResponse;
    fromJSON(object: any): QueryAllSampleTypeResponse;
    toJSON(message: QueryAllSampleTypeResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSampleTypeResponse>): QueryAllSampleTypeResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    SampleType(request: QueryGetSampleTypeRequest): Promise<QueryGetSampleTypeResponse>;
    SampleTypeAll(request: QueryAllSampleTypeRequest): Promise<QueryAllSampleTypeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SampleType(request: QueryGetSampleTypeRequest): Promise<QueryGetSampleTypeResponse>;
    SampleTypeAll(request: QueryAllSampleTypeRequest): Promise<QueryAllSampleTypeResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

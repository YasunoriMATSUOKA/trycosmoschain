import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";
export interface SampleType {
    creator: string;
    id: number;
    sampleField1: string;
    sampleField2: string;
    sampleField3: string;
}
export declare const SampleType: {
    encode(message: SampleType, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SampleType;
    fromJSON(object: any): SampleType;
    toJSON(message: SampleType): unknown;
    fromPartial(object: DeepPartial<SampleType>): SampleType;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";

export interface SampleType {
  creator: string;
  id: number;
  sampleField1: string;
  sampleField2: string;
  sampleField3: string;
}

const baseSampleType: object = {
  creator: "",
  id: 0,
  sampleField1: "",
  sampleField2: "",
  sampleField3: "",
};

export const SampleType = {
  encode(message: SampleType, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.sampleField1 !== "") {
      writer.uint32(26).string(message.sampleField1);
    }
    if (message.sampleField2 !== "") {
      writer.uint32(34).string(message.sampleField2);
    }
    if (message.sampleField3 !== "") {
      writer.uint32(42).string(message.sampleField3);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SampleType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSampleType } as SampleType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sampleField1 = reader.string();
          break;
        case 4:
          message.sampleField2 = reader.string();
          break;
        case 5:
          message.sampleField3 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SampleType {
    const message = { ...baseSampleType } as SampleType;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.sampleField1 !== undefined && object.sampleField1 !== null) {
      message.sampleField1 = String(object.sampleField1);
    } else {
      message.sampleField1 = "";
    }
    if (object.sampleField2 !== undefined && object.sampleField2 !== null) {
      message.sampleField2 = String(object.sampleField2);
    } else {
      message.sampleField2 = "";
    }
    if (object.sampleField3 !== undefined && object.sampleField3 !== null) {
      message.sampleField3 = String(object.sampleField3);
    } else {
      message.sampleField3 = "";
    }
    return message;
  },

  toJSON(message: SampleType): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.sampleField1 !== undefined &&
      (obj.sampleField1 = message.sampleField1);
    message.sampleField2 !== undefined &&
      (obj.sampleField2 = message.sampleField2);
    message.sampleField3 !== undefined &&
      (obj.sampleField3 = message.sampleField3);
    return obj;
  },

  fromPartial(object: DeepPartial<SampleType>): SampleType {
    const message = { ...baseSampleType } as SampleType;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.sampleField1 !== undefined && object.sampleField1 !== null) {
      message.sampleField1 = object.sampleField1;
    } else {
      message.sampleField1 = "";
    }
    if (object.sampleField2 !== undefined && object.sampleField2 !== null) {
      message.sampleField2 = object.sampleField2;
    } else {
      message.sampleField2 = "";
    }
    if (object.sampleField3 !== undefined && object.sampleField3 !== null) {
      message.sampleField3 = object.sampleField3;
    } else {
      message.sampleField3 = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

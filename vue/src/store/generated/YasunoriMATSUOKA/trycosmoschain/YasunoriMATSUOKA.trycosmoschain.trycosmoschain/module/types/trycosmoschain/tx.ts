/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";

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

export interface MsgUpdateSampleTypeResponse {}

export interface MsgDeleteSampleType {
  creator: string;
  id: number;
}

export interface MsgDeleteSampleTypeResponse {}

const baseMsgCreateSampleType: object = {
  creator: "",
  sampleField1: "",
  sampleField2: "",
  sampleField3: "",
};

export const MsgCreateSampleType = {
  encode(
    message: MsgCreateSampleType,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sampleField1 !== "") {
      writer.uint32(18).string(message.sampleField1);
    }
    if (message.sampleField2 !== "") {
      writer.uint32(26).string(message.sampleField2);
    }
    if (message.sampleField3 !== "") {
      writer.uint32(34).string(message.sampleField3);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSampleType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSampleType } as MsgCreateSampleType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sampleField1 = reader.string();
          break;
        case 3:
          message.sampleField2 = reader.string();
          break;
        case 4:
          message.sampleField3 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSampleType {
    const message = { ...baseMsgCreateSampleType } as MsgCreateSampleType;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateSampleType): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sampleField1 !== undefined &&
      (obj.sampleField1 = message.sampleField1);
    message.sampleField2 !== undefined &&
      (obj.sampleField2 = message.sampleField2);
    message.sampleField3 !== undefined &&
      (obj.sampleField3 = message.sampleField3);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSampleType>): MsgCreateSampleType {
    const message = { ...baseMsgCreateSampleType } as MsgCreateSampleType;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateSampleTypeResponse: object = { id: 0 };

export const MsgCreateSampleTypeResponse = {
  encode(
    message: MsgCreateSampleTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSampleTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSampleTypeResponse,
    } as MsgCreateSampleTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSampleTypeResponse {
    const message = {
      ...baseMsgCreateSampleTypeResponse,
    } as MsgCreateSampleTypeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSampleTypeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSampleTypeResponse>
  ): MsgCreateSampleTypeResponse {
    const message = {
      ...baseMsgCreateSampleTypeResponse,
    } as MsgCreateSampleTypeResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateSampleType: object = {
  creator: "",
  id: 0,
  sampleField1: "",
  sampleField2: "",
  sampleField3: "",
};

export const MsgUpdateSampleType = {
  encode(
    message: MsgUpdateSampleType,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSampleType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSampleType } as MsgUpdateSampleType;
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

  fromJSON(object: any): MsgUpdateSampleType {
    const message = { ...baseMsgUpdateSampleType } as MsgUpdateSampleType;
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

  toJSON(message: MsgUpdateSampleType): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateSampleType>): MsgUpdateSampleType {
    const message = { ...baseMsgUpdateSampleType } as MsgUpdateSampleType;
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

const baseMsgUpdateSampleTypeResponse: object = {};

export const MsgUpdateSampleTypeResponse = {
  encode(
    _: MsgUpdateSampleTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSampleTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSampleTypeResponse,
    } as MsgUpdateSampleTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateSampleTypeResponse {
    const message = {
      ...baseMsgUpdateSampleTypeResponse,
    } as MsgUpdateSampleTypeResponse;
    return message;
  },

  toJSON(_: MsgUpdateSampleTypeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSampleTypeResponse>
  ): MsgUpdateSampleTypeResponse {
    const message = {
      ...baseMsgUpdateSampleTypeResponse,
    } as MsgUpdateSampleTypeResponse;
    return message;
  },
};

const baseMsgDeleteSampleType: object = { creator: "", id: 0 };

export const MsgDeleteSampleType = {
  encode(
    message: MsgDeleteSampleType,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSampleType {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSampleType } as MsgDeleteSampleType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSampleType {
    const message = { ...baseMsgDeleteSampleType } as MsgDeleteSampleType;
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
    return message;
  },

  toJSON(message: MsgDeleteSampleType): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSampleType>): MsgDeleteSampleType {
    const message = { ...baseMsgDeleteSampleType } as MsgDeleteSampleType;
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
    return message;
  },
};

const baseMsgDeleteSampleTypeResponse: object = {};

export const MsgDeleteSampleTypeResponse = {
  encode(
    _: MsgDeleteSampleTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSampleTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSampleTypeResponse,
    } as MsgDeleteSampleTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteSampleTypeResponse {
    const message = {
      ...baseMsgDeleteSampleTypeResponse,
    } as MsgDeleteSampleTypeResponse;
    return message;
  },

  toJSON(_: MsgDeleteSampleTypeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSampleTypeResponse>
  ): MsgDeleteSampleTypeResponse {
    const message = {
      ...baseMsgDeleteSampleTypeResponse,
    } as MsgDeleteSampleTypeResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateSampleType(
    request: MsgCreateSampleType
  ): Promise<MsgCreateSampleTypeResponse>;
  UpdateSampleType(
    request: MsgUpdateSampleType
  ): Promise<MsgUpdateSampleTypeResponse>;
  DeleteSampleType(
    request: MsgDeleteSampleType
  ): Promise<MsgDeleteSampleTypeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateSampleType(
    request: MsgCreateSampleType
  ): Promise<MsgCreateSampleTypeResponse> {
    const data = MsgCreateSampleType.encode(request).finish();
    const promise = this.rpc.request(
      "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Msg",
      "CreateSampleType",
      data
    );
    return promise.then((data) =>
      MsgCreateSampleTypeResponse.decode(new Reader(data))
    );
  }

  UpdateSampleType(
    request: MsgUpdateSampleType
  ): Promise<MsgUpdateSampleTypeResponse> {
    const data = MsgUpdateSampleType.encode(request).finish();
    const promise = this.rpc.request(
      "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Msg",
      "UpdateSampleType",
      data
    );
    return promise.then((data) =>
      MsgUpdateSampleTypeResponse.decode(new Reader(data))
    );
  }

  DeleteSampleType(
    request: MsgDeleteSampleType
  ): Promise<MsgDeleteSampleTypeResponse> {
    const data = MsgDeleteSampleType.encode(request).finish();
    const promise = this.rpc.request(
      "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Msg",
      "DeleteSampleType",
      data
    );
    return promise.then((data) =>
      MsgDeleteSampleTypeResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

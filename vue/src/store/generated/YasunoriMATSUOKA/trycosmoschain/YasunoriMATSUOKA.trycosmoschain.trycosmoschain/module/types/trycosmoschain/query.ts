/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { SampleType } from "../trycosmoschain/sampleType";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";

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

const baseQueryGetSampleTypeRequest: object = { id: 0 };

export const QueryGetSampleTypeRequest = {
  encode(
    message: QueryGetSampleTypeRequest,
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
  ): QueryGetSampleTypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSampleTypeRequest,
    } as QueryGetSampleTypeRequest;
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

  fromJSON(object: any): QueryGetSampleTypeRequest {
    const message = {
      ...baseQueryGetSampleTypeRequest,
    } as QueryGetSampleTypeRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSampleTypeRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSampleTypeRequest>
  ): QueryGetSampleTypeRequest {
    const message = {
      ...baseQueryGetSampleTypeRequest,
    } as QueryGetSampleTypeRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetSampleTypeResponse: object = {};

export const QueryGetSampleTypeResponse = {
  encode(
    message: QueryGetSampleTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SampleType !== undefined) {
      SampleType.encode(message.SampleType, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSampleTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSampleTypeResponse,
    } as QueryGetSampleTypeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SampleType = SampleType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSampleTypeResponse {
    const message = {
      ...baseQueryGetSampleTypeResponse,
    } as QueryGetSampleTypeResponse;
    if (object.SampleType !== undefined && object.SampleType !== null) {
      message.SampleType = SampleType.fromJSON(object.SampleType);
    } else {
      message.SampleType = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSampleTypeResponse): unknown {
    const obj: any = {};
    message.SampleType !== undefined &&
      (obj.SampleType = message.SampleType
        ? SampleType.toJSON(message.SampleType)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSampleTypeResponse>
  ): QueryGetSampleTypeResponse {
    const message = {
      ...baseQueryGetSampleTypeResponse,
    } as QueryGetSampleTypeResponse;
    if (object.SampleType !== undefined && object.SampleType !== null) {
      message.SampleType = SampleType.fromPartial(object.SampleType);
    } else {
      message.SampleType = undefined;
    }
    return message;
  },
};

const baseQueryAllSampleTypeRequest: object = {};

export const QueryAllSampleTypeRequest = {
  encode(
    message: QueryAllSampleTypeRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSampleTypeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSampleTypeRequest,
    } as QueryAllSampleTypeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSampleTypeRequest {
    const message = {
      ...baseQueryAllSampleTypeRequest,
    } as QueryAllSampleTypeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSampleTypeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSampleTypeRequest>
  ): QueryAllSampleTypeRequest {
    const message = {
      ...baseQueryAllSampleTypeRequest,
    } as QueryAllSampleTypeRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSampleTypeResponse: object = {};

export const QueryAllSampleTypeResponse = {
  encode(
    message: QueryAllSampleTypeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.SampleType) {
      SampleType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSampleTypeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSampleTypeResponse,
    } as QueryAllSampleTypeResponse;
    message.SampleType = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SampleType.push(SampleType.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSampleTypeResponse {
    const message = {
      ...baseQueryAllSampleTypeResponse,
    } as QueryAllSampleTypeResponse;
    message.SampleType = [];
    if (object.SampleType !== undefined && object.SampleType !== null) {
      for (const e of object.SampleType) {
        message.SampleType.push(SampleType.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSampleTypeResponse): unknown {
    const obj: any = {};
    if (message.SampleType) {
      obj.SampleType = message.SampleType.map((e) =>
        e ? SampleType.toJSON(e) : undefined
      );
    } else {
      obj.SampleType = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSampleTypeResponse>
  ): QueryAllSampleTypeResponse {
    const message = {
      ...baseQueryAllSampleTypeResponse,
    } as QueryAllSampleTypeResponse;
    message.SampleType = [];
    if (object.SampleType !== undefined && object.SampleType !== null) {
      for (const e of object.SampleType) {
        message.SampleType.push(SampleType.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  SampleType(
    request: QueryGetSampleTypeRequest
  ): Promise<QueryGetSampleTypeResponse>;
  SampleTypeAll(
    request: QueryAllSampleTypeRequest
  ): Promise<QueryAllSampleTypeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SampleType(
    request: QueryGetSampleTypeRequest
  ): Promise<QueryGetSampleTypeResponse> {
    const data = QueryGetSampleTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query",
      "SampleType",
      data
    );
    return promise.then((data) =>
      QueryGetSampleTypeResponse.decode(new Reader(data))
    );
  }

  SampleTypeAll(
    request: QueryAllSampleTypeRequest
  ): Promise<QueryAllSampleTypeResponse> {
    const data = QueryAllSampleTypeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Query",
      "SampleTypeAll",
      data
    );
    return promise.then((data) =>
      QueryAllSampleTypeResponse.decode(new Reader(data))
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

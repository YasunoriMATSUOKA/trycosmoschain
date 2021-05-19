/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";
const baseMsgCreateSampleType = {
    creator: "",
    sampleField1: "",
    sampleField2: "",
    sampleField3: "",
};
export const MsgCreateSampleType = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSampleType };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateSampleType };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.sampleField1 !== undefined && object.sampleField1 !== null) {
            message.sampleField1 = String(object.sampleField1);
        }
        else {
            message.sampleField1 = "";
        }
        if (object.sampleField2 !== undefined && object.sampleField2 !== null) {
            message.sampleField2 = String(object.sampleField2);
        }
        else {
            message.sampleField2 = "";
        }
        if (object.sampleField3 !== undefined && object.sampleField3 !== null) {
            message.sampleField3 = String(object.sampleField3);
        }
        else {
            message.sampleField3 = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sampleField1 !== undefined &&
            (obj.sampleField1 = message.sampleField1);
        message.sampleField2 !== undefined &&
            (obj.sampleField2 = message.sampleField2);
        message.sampleField3 !== undefined &&
            (obj.sampleField3 = message.sampleField3);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSampleType };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.sampleField1 !== undefined && object.sampleField1 !== null) {
            message.sampleField1 = object.sampleField1;
        }
        else {
            message.sampleField1 = "";
        }
        if (object.sampleField2 !== undefined && object.sampleField2 !== null) {
            message.sampleField2 = object.sampleField2;
        }
        else {
            message.sampleField2 = "";
        }
        if (object.sampleField3 !== undefined && object.sampleField3 !== null) {
            message.sampleField3 = object.sampleField3;
        }
        else {
            message.sampleField3 = "";
        }
        return message;
    },
};
const baseMsgCreateSampleTypeResponse = { id: 0 };
export const MsgCreateSampleTypeResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateSampleTypeResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateSampleTypeResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateSampleTypeResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateSampleType = {
    creator: "",
    id: 0,
    sampleField1: "",
    sampleField2: "",
    sampleField3: "",
};
export const MsgUpdateSampleType = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSampleType };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateSampleType };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.sampleField1 !== undefined && object.sampleField1 !== null) {
            message.sampleField1 = String(object.sampleField1);
        }
        else {
            message.sampleField1 = "";
        }
        if (object.sampleField2 !== undefined && object.sampleField2 !== null) {
            message.sampleField2 = String(object.sampleField2);
        }
        else {
            message.sampleField2 = "";
        }
        if (object.sampleField3 !== undefined && object.sampleField3 !== null) {
            message.sampleField3 = String(object.sampleField3);
        }
        else {
            message.sampleField3 = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMsgUpdateSampleType };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.sampleField1 !== undefined && object.sampleField1 !== null) {
            message.sampleField1 = object.sampleField1;
        }
        else {
            message.sampleField1 = "";
        }
        if (object.sampleField2 !== undefined && object.sampleField2 !== null) {
            message.sampleField2 = object.sampleField2;
        }
        else {
            message.sampleField2 = "";
        }
        if (object.sampleField3 !== undefined && object.sampleField3 !== null) {
            message.sampleField3 = object.sampleField3;
        }
        else {
            message.sampleField3 = "";
        }
        return message;
    },
};
const baseMsgUpdateSampleTypeResponse = {};
export const MsgUpdateSampleTypeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateSampleTypeResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateSampleTypeResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateSampleTypeResponse,
        };
        return message;
    },
};
const baseMsgDeleteSampleType = { creator: "", id: 0 };
export const MsgDeleteSampleType = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSampleType };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteSampleType };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSampleType };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteSampleTypeResponse = {};
export const MsgDeleteSampleTypeResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteSampleTypeResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteSampleTypeResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteSampleTypeResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateSampleType(request) {
        const data = MsgCreateSampleType.encode(request).finish();
        const promise = this.rpc.request("YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Msg", "CreateSampleType", data);
        return promise.then((data) => MsgCreateSampleTypeResponse.decode(new Reader(data)));
    }
    UpdateSampleType(request) {
        const data = MsgUpdateSampleType.encode(request).finish();
        const promise = this.rpc.request("YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Msg", "UpdateSampleType", data);
        return promise.then((data) => MsgUpdateSampleTypeResponse.decode(new Reader(data)));
    }
    DeleteSampleType(request) {
        const data = MsgDeleteSampleType.encode(request).finish();
        const promise = this.rpc.request("YasunoriMATSUOKA.trycosmoschain.trycosmoschain.Msg", "DeleteSampleType", data);
        return promise.then((data) => MsgDeleteSampleTypeResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}

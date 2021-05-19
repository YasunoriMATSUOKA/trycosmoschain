/* eslint-disable */
import { SampleType } from "../trycosmoschain/sampleType";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "YasunoriMATSUOKA.trycosmoschain.trycosmoschain";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sampleTypeList) {
            SampleType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.sampleTypeList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sampleTypeList.push(SampleType.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.sampleTypeList = [];
        if (object.sampleTypeList !== undefined && object.sampleTypeList !== null) {
            for (const e of object.sampleTypeList) {
                message.sampleTypeList.push(SampleType.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sampleTypeList) {
            obj.sampleTypeList = message.sampleTypeList.map((e) => e ? SampleType.toJSON(e) : undefined);
        }
        else {
            obj.sampleTypeList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.sampleTypeList = [];
        if (object.sampleTypeList !== undefined && object.sampleTypeList !== null) {
            for (const e of object.sampleTypeList) {
                message.sampleTypeList.push(SampleType.fromPartial(e));
            }
        }
        return message;
    },
};

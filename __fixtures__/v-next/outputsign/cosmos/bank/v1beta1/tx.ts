import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.bank.v1beta1";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
export interface MsgSendProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend";
  value: Uint8Array;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse";
  value: Uint8Array;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  inputs: Input[];
  outputs: Output[];
}
export interface MsgMultiSendProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend";
  value: Uint8Array;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
  inputs: InputSDKType[];
  outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}
export interface MsgMultiSendResponseProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse";
  value: Uint8Array;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {}
function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
export const MsgSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgSendProtoMsg): MsgSend {
    return MsgSend.decode(message.value);
  },
  toProto(message: MsgSend): Uint8Array {
    return MsgSend.encode(message).finish();
  },
  toProtoMsg(message: MsgSend): MsgSendProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: MsgSend.encode(message).finish()
    };
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
export const MsgSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
  fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse {
    return MsgSendResponse.decode(message.value);
  },
  toProto(message: MsgSendResponse): Uint8Array {
    return MsgSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
      value: MsgSendResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSend(): MsgMultiSend {
  return {
    inputs: [],
    outputs: []
  };
}
export const MsgMultiSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
  encode(message: MsgMultiSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: MsgMultiSendProtoMsg): MsgMultiSend {
    return MsgMultiSend.decode(message.value);
  },
  toProto(message: MsgMultiSend): Uint8Array {
    return MsgMultiSend.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSend): MsgMultiSendProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
      value: MsgMultiSend.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return {};
}
export const MsgMultiSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
  encode(_: MsgMultiSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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
  fromProtoMsg(message: MsgMultiSendResponseProtoMsg): MsgMultiSendResponse {
    return MsgMultiSendResponse.decode(message.value);
  },
  toProto(message: MsgMultiSendResponse): Uint8Array {
    return MsgMultiSendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
      value: MsgMultiSendResponse.encode(message).finish()
    };
  }
};
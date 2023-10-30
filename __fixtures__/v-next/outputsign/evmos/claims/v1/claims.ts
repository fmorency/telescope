import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "evmos.claims.v1";
/** Action defines the list of available actions to claim the airdrop tokens. */
export enum Action {
  /** ACTION_UNSPECIFIED - UNSPECIFIED defines an invalid action. */
  ACTION_UNSPECIFIED = 0,
  /** ACTION_VOTE - VOTE defines a proposal vote. */
  ACTION_VOTE = 1,
  /** ACTION_DELEGATE - DELEGATE defines an staking delegation. */
  ACTION_DELEGATE = 2,
  /** ACTION_EVM - EVM defines an EVM transaction. */
  ACTION_EVM = 3,
  /** ACTION_IBC_TRANSFER - IBC Transfer defines a fungible token transfer transaction via IBC. */
  ACTION_IBC_TRANSFER = 4,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return Action.ACTION_UNSPECIFIED;
    case 1:
    case "ACTION_VOTE":
      return Action.ACTION_VOTE;
    case 2:
    case "ACTION_DELEGATE":
      return Action.ACTION_DELEGATE;
    case 3:
    case "ACTION_EVM":
      return Action.ACTION_EVM;
    case 4:
    case "ACTION_IBC_TRANSFER":
      return Action.ACTION_IBC_TRANSFER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case Action.ACTION_VOTE:
      return "ACTION_VOTE";
    case Action.ACTION_DELEGATE:
      return "ACTION_DELEGATE";
    case Action.ACTION_EVM:
      return "ACTION_EVM";
    case Action.ACTION_IBC_TRANSFER:
      return "ACTION_IBC_TRANSFER";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface Claim {
  /** action enum */
  action: Action;
  /** true if the action has been completed */
  completed: boolean;
  /** claimable token amount for the action. Zero if completed */
  claimableAmount: string;
}
export interface ClaimProtoMsg {
  typeUrl: "/evmos.claims.v1.Claim";
  value: Uint8Array;
}
/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 */
export interface ClaimSDKType {
  action: Action;
  completed: boolean;
  claimable_amount: string;
}
/** ClaimsRecordAddress is the claims metadata per address that is used at Genesis. */
export interface ClaimsRecordAddress {
  /** bech32 or hex address of claim user */
  address: string;
  /** total initial claimable amount for the user */
  initialClaimableAmount: string;
  /** slice of the available actions completed */
  actionsCompleted: boolean[];
}
export interface ClaimsRecordAddressProtoMsg {
  typeUrl: "/evmos.claims.v1.ClaimsRecordAddress";
  value: Uint8Array;
}
/** ClaimsRecordAddress is the claims metadata per address that is used at Genesis. */
export interface ClaimsRecordAddressSDKType {
  address: string;
  initial_claimable_amount: string;
  actions_completed: boolean[];
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecord {
  /** total initial claimable amount for the user */
  initialClaimableAmount: string;
  /** slice of the available actions completed */
  actionsCompleted: boolean[];
}
export interface ClaimsRecordProtoMsg {
  typeUrl: "/evmos.claims.v1.ClaimsRecord";
  value: Uint8Array;
}
/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 */
export interface ClaimsRecordSDKType {
  initial_claimable_amount: string;
  actions_completed: boolean[];
}
function createBaseClaim(): Claim {
  return {
    action: 0,
    completed: false,
    claimableAmount: ""
  };
}
export const Claim = {
  typeUrl: "/evmos.claims.v1.Claim",
  encode(message: Claim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.completed === true) {
      writer.uint32(16).bool(message.completed);
    }
    if (message.claimableAmount !== "") {
      writer.uint32(26).string(message.claimableAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Claim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = (reader.int32() as any);
          break;
        case 2:
          message.completed = reader.bool();
          break;
        case 3:
          message.claimableAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ClaimProtoMsg): Claim {
    return Claim.decode(message.value);
  },
  toProto(message: Claim): Uint8Array {
    return Claim.encode(message).finish();
  },
  toProtoMsg(message: Claim): ClaimProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.Claim",
      value: Claim.encode(message).finish()
    };
  }
};
function createBaseClaimsRecordAddress(): ClaimsRecordAddress {
  return {
    address: "",
    initialClaimableAmount: "",
    actionsCompleted: []
  };
}
export const ClaimsRecordAddress = {
  typeUrl: "/evmos.claims.v1.ClaimsRecordAddress",
  encode(message: ClaimsRecordAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.initialClaimableAmount !== "") {
      writer.uint32(18).string(message.initialClaimableAmount);
    }
    writer.uint32(26).fork();
    for (const v of message.actionsCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimsRecordAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimsRecordAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.initialClaimableAmount = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionsCompleted.push(reader.bool());
            }
          } else {
            message.actionsCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ClaimsRecordAddressProtoMsg): ClaimsRecordAddress {
    return ClaimsRecordAddress.decode(message.value);
  },
  toProto(message: ClaimsRecordAddress): Uint8Array {
    return ClaimsRecordAddress.encode(message).finish();
  },
  toProtoMsg(message: ClaimsRecordAddress): ClaimsRecordAddressProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.ClaimsRecordAddress",
      value: ClaimsRecordAddress.encode(message).finish()
    };
  }
};
function createBaseClaimsRecord(): ClaimsRecord {
  return {
    initialClaimableAmount: "",
    actionsCompleted: []
  };
}
export const ClaimsRecord = {
  typeUrl: "/evmos.claims.v1.ClaimsRecord",
  encode(message: ClaimsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.initialClaimableAmount !== "") {
      writer.uint32(10).string(message.initialClaimableAmount);
    }
    writer.uint32(18).fork();
    for (const v of message.actionsCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialClaimableAmount = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionsCompleted.push(reader.bool());
            }
          } else {
            message.actionsCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ClaimsRecordProtoMsg): ClaimsRecord {
    return ClaimsRecord.decode(message.value);
  },
  toProto(message: ClaimsRecord): Uint8Array {
    return ClaimsRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimsRecord): ClaimsRecordProtoMsg {
    return {
      typeUrl: "/evmos.claims.v1.ClaimsRecord",
      value: ClaimsRecord.encode(message).finish()
    };
  }
};
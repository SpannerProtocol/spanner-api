// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, Text, Vec, bool, u16, u32, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { CurrencyId } from 'packages/types/src/interfaces/primitives';
import type { AccountId, Balance, BlockNumber } from 'packages/types/src/interfaces/runtime';

/** @name Buyer */
export interface Buyer extends Enum {
  readonly isDpo: boolean;
  readonly asDpo: DpoIndex;
  readonly isPassenger: boolean;
  readonly asPassenger: AccountId;
  readonly isInvalidBuyer: boolean;
}

/** @name DpoIndex */
export interface DpoIndex extends u32 {}

/** @name DpoInfo */
export interface DpoInfo extends Struct {
  readonly index: DpoIndex;
  readonly name: Text;
  readonly token_id: CurrencyId;
  readonly manager: AccountId;
  readonly target: Target;
  readonly target_maturity: BlockNumber;
  readonly target_amount: Balance;
  readonly target_yield_estimate: Balance;
  readonly target_bonus_estimate: Balance;
  readonly issued_shares: Balance;
  readonly share_rate: ITuple<[Balance, Balance]>;
  readonly fifo: Vec<Buyer>;
  readonly base_fee: u32;
  readonly fee: u32;
  readonly fee_slashed: bool;
  readonly vault_deposit: Balance;
  readonly vault_withdraw: Balance;
  readonly vault_yield: Balance;
  readonly vault_bonus: Balance;
  readonly total_fund: Balance;
  readonly total_yield_received: Balance;
  readonly total_bonus_received: Balance;
  readonly total_milestone_received: Balance;
  readonly blk_of_last_yield: Option<BlockNumber>;
  readonly blk_of_dpo_filled: Option<BlockNumber>;
  readonly expiry_blk: BlockNumber;
  readonly state: DpoState;
  readonly referrer: Option<AccountId>;
  readonly fare_withdrawn: bool;
  readonly direct_referral_rate: u32;
}

/** @name DpoInfoV1 */
export interface DpoInfoV1 extends Struct {
  readonly index: DpoIndex;
  readonly name: Text;
  readonly token_id: CurrencyId;
  readonly manager: AccountId;
  readonly target: TargetV1;
  readonly target_maturity: BlockNumber;
  readonly target_amount: Balance;
  readonly target_yield_estimate: Balance;
  readonly target_bonus_estimate: Balance;
  readonly amount_per_seat: Balance;
  readonly empty_seats: u8;
  readonly fifo: Vec<Buyer>;
  readonly vault_deposit: Balance;
  readonly vault_withdraw: Balance;
  readonly vault_yield: Balance;
  readonly vault_bonus: Balance;
  readonly total_yield_received: Balance;
  readonly total_bonus_received: Balance;
  readonly total_milestone_received: Balance;
  readonly blk_of_last_yield: Option<BlockNumber>;
  readonly blk_of_dpo_filled: Option<BlockNumber>;
  readonly expiry_blk: BlockNumber;
  readonly state: DpoState;
  readonly referrer: Option<AccountId>;
  readonly fare_withdrawn: bool;
  readonly direct_referral_rate: u32;
  readonly fee: u32;
  readonly fee_slashed: bool;
}

/** @name DpoMemberInfo */
export interface DpoMemberInfo extends Struct {
  readonly buyer: Buyer;
  readonly share: Balance;
  readonly referrer: Referrer;
}

/** @name DpoMemberInfoV1 */
export interface DpoMemberInfoV1 extends Struct {
  readonly buyer: Buyer;
  readonly number_of_seats: u8;
  readonly referrer: Referrer;
}

/** @name DpoState */
export interface DpoState extends Enum {
  readonly isCreated: boolean;
  readonly isActive: boolean;
  readonly isRunning: boolean;
  readonly isFailed: boolean;
  readonly isCompleted: boolean;
}

/** @name MilestoneRewardInfo */
export interface MilestoneRewardInfo extends Struct {
  readonly token_id: CurrencyId;
  readonly deposited: Balance;
  readonly milestones: Vec<ITuple<[Balance, Balance]>>;
}

/** @name PaymentType */
export interface PaymentType extends Enum {
  readonly isDeposit: boolean;
  readonly isBonus: boolean;
  readonly isMilestoneReward: boolean;
  readonly isYield: boolean;
  readonly isUnusedFund: boolean;
  readonly isWithdrawOnCompletion: boolean;
  readonly isWithdrawOnFailure: boolean;
}

/** @name Referrer */
export interface Referrer extends Enum {
  readonly isNone: boolean;
  readonly isMemberOfDpo: boolean;
  readonly asMemberOfDpo: Buyer;
  readonly isExternal: boolean;
  readonly asExternal: ITuple<[AccountId, Buyer]>;
}

/** @name Target */
export interface Target extends Enum {
  readonly isDpo: boolean;
  readonly asDpo: ITuple<[DpoIndex, Balance]>;
  readonly isTravelCabin: boolean;
  readonly asTravelCabin: TravelCabinIndex;
}

/** @name TargetV1 */
export interface TargetV1 extends Enum {
  readonly isDpo: boolean;
  readonly asDpo: ITuple<[DpoIndex, u8]>;
  readonly isTravelCabin: boolean;
  readonly asTravelCabin: TravelCabinIndex;
}

/** @name TravelCabinBuyerInfo */
export interface TravelCabinBuyerInfo extends Struct {
  readonly buyer: Buyer;
  readonly purchase_blk: BlockNumber;
  readonly yield_withdrawn: Balance;
  readonly fare_withdrawn: bool;
}

/** @name TravelCabinBuyerInfoV1 */
export interface TravelCabinBuyerInfoV1 extends Struct {
  readonly buyer: Buyer;
  readonly purchase_blk: BlockNumber;
  readonly yield_withdrawn: Balance;
  readonly fare_withdrawn: bool;
  readonly blk_of_last_withdraw: BlockNumber;
}

/** @name TravelCabinIndex */
export interface TravelCabinIndex extends u32 {}

/** @name TravelCabinInfo */
export interface TravelCabinInfo extends Struct {
  readonly name: Text;
  readonly creator: AccountId;
  readonly token_id: CurrencyId;
  readonly index: TravelCabinIndex;
  readonly deposit_amount: Balance;
  readonly bonus_total: Balance;
  readonly yield_total: Balance;
  readonly maturity: BlockNumber;
}

/** @name TravelCabinInventoryIndex */
export interface TravelCabinInventoryIndex extends u16 {}

export type PHANTOM_BULLETTRAIN = 'bulletTrain';

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types';
import type { CurrencyId } from 'packages/types/src/interfaces/primitives';
import type { Balance } from 'packages/types/src/interfaces/runtime';

/** @name PoolId */
export interface PoolId extends Enum {
  readonly isDexYieldFarming: boolean;
  readonly asDexYieldFarming: CurrencyId;
}

/** @name PoolInfo */
export interface PoolInfo extends Struct {
  readonly total_shares: Balance;
  readonly total_rewards: Balance;
  readonly total_withdrawn_rewards: Balance;
}

export type PHANTOM_REWARDS = 'rewards';

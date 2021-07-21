// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { CurrencyId } from 'packages/types/src/interfaces/primitives';
import type { Balance, BlockNumber } from 'packages/types/src/interfaces/runtime';

/** @name TradingPair */
export interface TradingPair extends ITuple<[CurrencyId, CurrencyId]> {}

/** @name TradingPairProvisionParameters */
export interface TradingPairProvisionParameters extends Struct {
  readonly min_contribution: ITuple<[Balance, Balance]>;
  readonly target_provision: ITuple<[Balance, Balance]>;
  readonly accumulated_provision: ITuple<[Balance, Balance]>;
  readonly not_before: BlockNumber;
}

/** @name TradingPairStatus */
export interface TradingPairStatus extends Enum {
  readonly isNotEnabled: boolean;
  readonly isProvisioning: boolean;
  readonly asProvisioning: TradingPairProvisionParameters;
  readonly isEnabled: boolean;
}

export type PHANTOM_DEX = 'dex';

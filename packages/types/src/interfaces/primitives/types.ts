// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, i128 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: TokenSymbol;
  readonly isDexShare: boolean;
  readonly asDexShare: ITuple<[TokenSymbol, TokenSymbol]>;
}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name TokenSymbol */
export interface TokenSymbol extends Enum {
  readonly isBolt: boolean;
  readonly isWusd: boolean;
  readonly isBbot: boolean;
  readonly isNcat: boolean;
  readonly isPlkt: boolean;
}

export type PHANTOM_PRIMITIVES = 'primitives';

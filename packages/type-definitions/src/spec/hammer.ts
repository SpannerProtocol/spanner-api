import type { OverrideVersionedType } from '@polkadot/types/types';
//todo: AccountInfo hardcoded for Substrate v3.0.0 https://github.com/polkadot-js/api/issues/3641
const versioned: OverrideVersionedType[] = [
  {
    minmax: [undefined, undefined],
    types: {AccountInfo: 'AccountInfoWithDualRefCount'}
  }
];

export default versioned;

import type { OverrideVersionedType } from '@polkadot/types/types';
// todo: AccountInfo hardcoded for Substrate v3.0.0 https://github.com/polkadot-js/api/issues/3641
const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 104],
    types: {
      DpoInfo: 'DpoInfoV1',
      Target: 'TargetV1',
      DpoMemberInfo: 'DpoMemberInfoV1',
      TravelCabinBuyerInfo: 'TravelCabinBuyerInfoV1'
    }
  },
  {
    minmax: [105, undefined],
    types: {}
  }
];

export default versioned;

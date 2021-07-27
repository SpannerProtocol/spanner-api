import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, 104],
    types: {}
  },
  {
    minmax: [105, undefined],
    types: {
      DpoInfo: 'DpoInfoWithShare',
      Target: 'TargetWithBalance',
      DpoMemberInfo: 'DpoMemberInfoWithShare',
      TravelCabinBuyerInfo: 'TravelCabinBuyerInfoFourRef'
    }
  }
];

export default versioned;

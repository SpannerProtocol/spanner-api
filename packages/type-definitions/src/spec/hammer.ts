import type { OverrideVersionedType } from '@polkadot/types/types';

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

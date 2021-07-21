import { ApiOptions } from '@polkadot/api/types';
import {
  typesBundle as spannerTypesBundle
} from '../../types/src';

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      spanner: {
        ...spannerTypesBundle?.spec?.spanner,
        ...typesBundle?.spec?.spanner
      }
    }
  },
  ...otherOptions
});

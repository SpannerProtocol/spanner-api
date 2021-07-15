import { ApiOptions } from '@polkadot/api/types';
import {
  rpc as spannerRpc,
  types as spannerTypes,
  typesAlias as spannerTypesAlias,
  typesBundle as spannerTypesBundle
} from '@spanner/types';

export const defaultOptions: ApiOptions = {
  types: spannerTypes,
  rpc: spannerRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...spannerTypes,
    ...types
  },
  rpc: {
    ...spannerRpc,
    ...rpc
  },
  typesAlias: {
    ...spannerTypesAlias,
    ...typesAlias
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      spanner: {
        ...spannerTypesBundle?.spec?.spanner,
        ...typesBundle?.spec?.spanner
      },
      hammer: {
        ...spannerTypesBundle?.spec?.hammer,
        ...typesBundle?.spec?.hammer
      }
    }
  },
  ...otherOptions
});

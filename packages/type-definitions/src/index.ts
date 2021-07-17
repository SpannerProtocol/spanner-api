import type { OverrideVersionedType } from '@polkadot/types/types';
import bulletTrain from './bulletTrain';
import common from './common';
import dex from './dex';
import primitives from './primitives';
import rewards from './rewards';
import {
  typesAliasFromDefs,
  jsonrpcFromDefs,
  typesFromDefs
} from '@open-web3/orml-type-definitions/utils';
import {
  rpc as ormlRpc,
  types as ormlTypes,
  typesAlias as ormlAlias
} from '@open-web3/orml-type-definitions';

import spannerVersioned from './spec/spanner';

const spannerDef = {
  bulletTrain,
  common,
  dex,
  primitives,
  rewards
};

export const types = {
  ...ormlTypes,
  ...typesFromDefs(spannerDef)
};
export const rpc = jsonrpcFromDefs(spannerDef, { ...ormlRpc });
export const typesAlias = typesAliasFromDefs(spannerDef, { ...ormlAlias });

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    spanner: getBundle(spannerVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    spanner: getBundle(spannerVersioned)
  }
};

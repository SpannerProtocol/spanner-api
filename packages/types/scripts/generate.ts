import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import {
  generateDefaultConsts,
  generateDefaultQuery,
  generateDefaultTx,
  generateDefaultRpc
} from '@polkadot/typegen/generate';
import metadataJSON from '../src/metadata/metadata.json';

import * as defaultDefinitions from '@polkadot/types/interfaces/definitions';

import * as ormlDefinitions from '@open-web3/orml-types/interfaces/definitions';

import * as spannerDefinitions from '../src/interfaces/definitions';

import { ModuleTypes } from '@polkadot/typegen/util/imports';
import { TypeRegistry } from '@polkadot/types';
import { registerDefinitions } from '@polkadot/typegen/util';
import { Metadata } from '@polkadot/metadata';

// Only keep our own modules to avoid conflicts with the ones provided by polkadot.js
function filterModules(names: string[], defs: any): string {
  const registry = new TypeRegistry();
  registerDefinitions(registry, defs);
  const data = new Metadata(registry, metadataJSON.result);

  // hack https://github.com/polkadot-js/api/issues/2687#issuecomment-705342442
  data.asLatest.toJSON();

  const filtered = data.toJSON() as any;

  filtered.metadata.v12.modules = filtered.metadata.v12.modules.filter(
    ({ name }: any) => names.includes(name)
  );

  return new Metadata(registry, filtered).toHex();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinitions } = defaultDefinitions;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinitions } = ormlDefinitions;

const definitions = {
  '@polkadot/types/interfaces': substrateDefinitions,
  '@open-web3/orml-types/interfaces': { tokens: ormlModulesDefinitions.tokens },
  '@spanner/types/interfaces': spannerDefinitions
} as unknown as {
  [importPath: string]: Record<string, ModuleTypes>;
};

const metadata = filterModules(
  ['BulletTrain', 'Rewards', 'Currencies', 'Dex', 'Tokens'],
  definitions
);

generateTsDef(
  definitions,
  'packages/types/src/interfaces',
  '@spanner/types/interfaces'
);
generateInterfaceTypes(
  definitions,
  'packages/types/src/interfaces/augment-types.ts'
);
generateDefaultConsts(
  'packages/types/src/interfaces/augment-api-consts.ts',
  metadata,
  definitions
);

generateDefaultTx(
  'packages/types/src/interfaces/augment-api-tx.ts',
  metadata,
  definitions
);
generateDefaultQuery(
  'packages/types/src/interfaces/augment-api-query.ts',
  metadata,
  definitions
);
generateDefaultRpc(
  'packages/types/src/interfaces/augment-api-rpc.ts',
  definitions
);

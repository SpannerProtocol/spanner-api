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
import { writeFile, HEADER } from '@polkadot/typegen/util';

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
const metaHex = metadataJSON.result;
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
  metaHex,
  definitions
);

generateDefaultTx(
  'packages/types/src/interfaces/augment-api-tx.ts',
  metaHex,
  definitions
);
generateDefaultQuery(
  'packages/types/src/interfaces/augment-api-query.ts',
  metaHex,
  definitions
);
generateDefaultRpc(
  'packages/types/src/interfaces/augment-api-rpc.ts',
  definitions
);

writeFile('packages/types/src/interfaces/augment-api.ts', (): string =>
  [
    HEADER('chain'),
    ...[
      '@polkadot/api/augment/rpc',
      ...['consts', 'query', 'tx', 'rpc']
        .filter((key) => !!key)
        .map((key) => `./augment-api-${key}`)
    ].map((path) => `import '${path}';\n`)
  ].join('')
);

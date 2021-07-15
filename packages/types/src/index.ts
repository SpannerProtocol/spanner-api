import {
  typesBundle as spannerTypesBundle,
  types as spannerTypes,
  typesAlias as spannerTypesAlias,
  rpc as spannerRpc
} from '@spanner/type-definitions';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

export const types: RegistryTypes = spannerTypes;

export const rpc: Record<
  string,
  Record<string, DefinitionRpc | DefinitionRpcSub>
> = spannerRpc;

export const typesAlias: Record<string, OverrideModuleType> = spannerTypesAlias;

export const typesBundle = spannerTypesBundle as unknown as OverrideBundleType;

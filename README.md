# spanner-api

This library provides additional typing to access Spanner / Hammer through [polkadot.js/api](https://github.com/polkadot-js/api)

###To Install
```bash
 git submodule add https://github.com/SpannerProtocol/spanner-api.git
 cd  spanner-api
 yarn install
 yarn build
 
 #add following in parent package json
"@spanner/api": "./spanner-api/packages/api/build",
"@spanner/type-definitions": "./spanner-api/packages/type-definitions/build",
"@spanner/types": "./spanner-api/packages/types/build",

#add following in parent tsconfig.json
"@polkadot/api/augment": ["spanner-api/packages/types/src/interfaces/augment-api.ts"],
"@polkadot/types/augment": ["spanner-api/packages/types/src/interfaces/augment-types.ts"],
```

###To Use
```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ApiOptions } from '@polkadot/api/types';
import { options } from '@spanner/api';

const provider = new WsProvider(WS_ENDPOINT);
const api = new ApiPromise(options({ provider }) as ApiOptions);
await api.isReady
```

# spanner-api

This library provides additional typing to access Spanner / Hammer through [polkadot.js/api](https://github.com/polkadot-js/api)

NOTE: make sure your application is running the same polkadot/api version as used to compile this library

### To Install
```bash
 git submodule add https://github.com/SpannerProtocol/spanner-api.git
 cd  spanner-api
 yarn install
 yarn build

#add following in parent tsconfig.json, path from baseUrl
"paths": {
  "@polkadot/api/augment": ["spanner-api/packages/types/src/interfaces/augment-api.ts"],
  "@polkadot/types/augment": ["spanner-api/packages/types/src/interfaces/augment-types.ts"],
},
```

### To Use
```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ApiOptions } from '@polkadot/api/types';
import { options } from '<PATH>/spanner-api/packages/api/src';

const provider = new WsProvider(WS_ENDPOINT);
const api = new ApiPromise(options({ provider }) as ApiOptions);
await api.isReady
```


## Classes

<dl>
<dt><a href="#AppAuthenticator">AppAuthenticator</a></dt>
<dd></dd>
<dt><a href="#WalletAuthenticator">WalletAuthenticator</a></dt>
<dd></dd>
<dt><a href="#AppHandlers">AppHandlers</a></dt>
<dd></dd>
<dt><a href="#AtomicSwapHandlers">AtomicSwapHandlers</a></dt>
<dd></dd>
<dt><a href="#WalletHandlers">WalletHandlers</a></dt>
<dd></dd>
</dl>


## Typedefs

<dl>
<dt><a href="#ApplicationInfo">ApplicationInfo</a></dt>
<dd></dd>
<dt><a href="#ChainInfo">ChainInfo</a></dt>
<dd></dd>
</dl>


## AppAuthenticator

**Kind**: global class  

* [AppAuthenticator](#AppAuthenticator)
  * [new AppAuthenticator(wallet)](#new_AppAuthenticator_new)
  * [sign(payload)](#AppAuthenticator+sign) ⇒ `object`
  * [verify(data, locale)](#AppAuthenticator+verify) ⇒

### new AppAuthenticator(wallet)

Creates an instance of DID Authenticator.

| Param  | Type     | Description                                                                                                                 |
| ------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| wallet | `Wallet` | wallet instance {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)} |

### appAuthenticator.sign(payload) ⇒ `object`

Generate and sign a jwt token, used to inter-application-communication

**Kind**: instance method of [`AppAuthenticator`](#AppAuthenticator)  
**Returns**: `object` - { appPk, appInfo }  

| Param   | Type     | Description                        |
| ------- | -------- | ---------------------------------- |
| payload | `object` | data to be included before signing |

### appAuthenticator.verify(data, locale) ⇒

Verify a jwt token signed by another application, used for inter-application communication

**Kind**: instance method of [`AppAuthenticator`](#AppAuthenticator)  
**Returns**: Promise<boolean>  

| Param  | Type     | Default          |
| ------ | -------- | ---------------- |
| data   | `object` |                  |
| locale | `string` | `&quot;en&quot;` |


## WalletAuthenticator

**Kind**: global class  

* [WalletAuthenticator](#WalletAuthenticator)
  * [new WalletAuthenticator(config)](#new_WalletAuthenticator_new)
  * [uri(params)](#WalletAuthenticator+uri) ⇒ `string`
  * [getPublicUrl(pathname, params)](#WalletAuthenticator+getPublicUrl) ⇒ `string`
  * [sign(params)](#WalletAuthenticator+sign) ⇒ `object`
  * [verify(data, \[locale\], \[enforceTimestamp\])](#WalletAuthenticator+verify) ⇒

### new WalletAuthenticator(config)

Creates an instance of DID Authenticator.

| Param                   | Type                                  | Default                       | Description                                                                                                                 |
| ----------------------- | ------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| config                  | `object`                              |                               |                                                                                                                             |
| config.wallet           | `Wallet`                              |                               | wallet instance {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)} |
| config.appInfo          | [`ApplicationInfo`](#ApplicationInfo) |                               | application basic info                                                                                                      |
| config.chainInfo        | [`ChainInfo`](#ChainInfo)             |                               | application chain info                                                                                                      |
| [config.crossChainInfo] | [`ChainInfo`](#ChainInfo)             | `{}`                          | asset chain info                                                                                                            |
| config.baseUrl          | `object`                              |                               | url to assemble wallet request uri                                                                                          |
| [config.tokenKey]       | `string`                              | `&quot;&#x27;_t_&#x27;&quot;` | query param key for `token`                                                                                                 |

### walletAuthenticator.uri(params) ⇒ `string`

Generate a deep link url that can be displayed as QRCode for ABT Wallet to consume

**Kind**: instance method of [`WalletAuthenticator`](#WalletAuthenticator)  

| Param           | Type     | Description                                            |
| --------------- | -------- | ------------------------------------------------------ |
| params          | `object` |                                                        |
| params.token    | `string` | action token                                           |
| params.pathname | `string` | wallet callback pathname                               |
| params.query    | `object` | params that should be persisted in wallet callback url |

### walletAuthenticator.getPublicUrl(pathname, params) ⇒ `string`

Compute public url to return to wallet

**Kind**: instance method of [`WalletAuthenticator`](#WalletAuthenticator)  

| Param    | Type     |
| -------- | -------- |
| pathname | `string` |
| params   | `object` |

### walletAuthenticator.sign(params) ⇒ `object`

Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo/crossChainInfo

**Kind**: instance method of [`WalletAuthenticator`](#WalletAuthenticator)  
**Returns**: `object` - { appPk, authInfo }  

| Param              | Type     | Description                                       |
| ------------------ | -------- | ------------------------------------------------- |
| params             | `object` |                                                   |
| params.token       | `string` | action token                                      |
| params.userDid     | `string` | decoded from req.query, base58                    |
| params.userPk      | `string` | decoded from req.query, base58                    |
| params.claims      | `object` | info required by application to complete the auth |
| params.extraParams | `object` | extra query params and locale                     |

### walletAuthenticator.verify(data, [locale], [enforceTimestamp]) ⇒

Verify a DID auth response sent from ABT Wallet

**Kind**: instance method of [`WalletAuthenticator`](#WalletAuthenticator)  
**Returns**: Promise<boolean>  

| Param              | Type      | Default          |
| ------------------ | --------- | ---------------- |
| data               | `object`  |                  |
| [locale]           | `string`  | `&quot;en&quot;` |
| [enforceTimestamp] | `boolean` | `true`           |


## AppHandlers

**Kind**: global class  

### new AppHandlers(authenticator)

Creates an instance of Application DID Auth handler

| Param         | Type                                    | Description                                                                                                                 |
| ------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| authenticator | [`AppAuthenticator`](#AppAuthenticator) | wallet instance {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)} |


## AtomicSwapHandlers

**Kind**: global class  

* [AtomicSwapHandlers](#AtomicSwapHandlers)
  * [new AtomicSwapHandlers(config)](#new_AtomicSwapHandlers_new)
  * [start(payload)](#AtomicSwapHandlers+start) ⇒ `Promise.<object>`
  * [attach(config)](#AtomicSwapHandlers+attach) ⇒

### new AtomicSwapHandlers(config)

Creates an instance of atomic swap handlers.

| Param                  | Type       | Default | Description                                                                                                                   |
| ---------------------- | ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| config                 | `object`   |         |                                                                                                                               |
| config.authenticator   | `object`   |         | Authenticator instance that can to jwt sign/verify                                                                            |
| config.tokenGenerator  | `function` |         | function to generate action token                                                                                             |
| config.swapStorage     | `object`   |         | storage that contains swap information                                                                                        |
| config.tokenStorage    | `object`   |         | storage that contains action token information                                                                                |
| config.offerChainHost  | `string`   |         | offer chain endpoint                                                                                                          |
| config.demandChainHost | `string`   |         | demand chain endpoint                                                                                                         |
| config.offerChainId    | `string`   |         | offer chain endpoint                                                                                                          |
| config.demandChainId   | `string`   |         | demand chain endpoint                                                                                                         |
| config.offerLocktime   | `number`   |         | num of blocks that will be locked before app chain swap can be revoked                                                        |
| config.demandLocktime  | `number`   |         | num of blocks that will be locked before asset chain swap can be revoked                                                      |
| [config.onPreAuth]     | `function` | `noop`  | function called before each auth request send back to app, used to check for permission, throw error to halt the auth process |

### atomicSwapHandlers.start(payload) ⇒ `Promise.<object>`

Create an swap placeholder, which must be finalized before actually doing the swap

**Kind**: instance method of [`AtomicSwapHandlers`](#AtomicSwapHandlers)  

| Param   | Type     |
| ------- | -------- |
| payload | `object` |

### atomicSwapHandlers.attach(config) ⇒

Attach routes and handlers for authenticator
Now express app have route handlers attached to the following url
Browser

* `GET /api/did/{action}/token` create new token
* `GET /api/did/{action}/status` check for token status
* `GET /api/did/{action}/timeout` expire a token
  Wallet
* `GET /api/did/{action}/auth` create auth response
* `POST /api/did/{action}/auth` process payment request
* `GET /api/did/{action}/retrieve` check payment
* `POST /api/did/{action}/retrieve` submit

**Kind**: instance method of [`AtomicSwapHandlers`](#AtomicSwapHandlers)  
**Returns**: void  

| Param                  | Type       | Default                             | Description                                                           |
| ---------------------- | ---------- | ----------------------------------- | --------------------------------------------------------------------- |
| config                 | `object`   |                                     | attach config { app, action, claims, prefix = '/api' }                |
| config.app             | `object`   |                                     | express instance to attach routes to                                  |
| config.claims          | `object`   |                                     | claims for this request                                               |
| config.action          | `string`   |                                     | action of this group of routes                                        |
| config.onAuth          | `function` |                                     | callback when user completed auth in abt wallet, and data posted back |
| [config.onComplete]    | `function` | `noop`                              | callback when the whole auth process is done, action token is removed |
| [config.onExpire]      | `function` | `noop`                              | callback when the action token expired                                |
| [config.onError]       | `function` | `console.error`                     | callback when there are some errors                                   |
| [config.prefix]        | `string`   | `&quot;&#x27;/api/swap&#x27;&quot;` | url prefix for this group endpoints                                   |
| [config.sessionDidKey] | `string`   | `&quot;&#x27;user.did&#x27;&quot;`  | key path to extract session user did from request object              |
| [config.tokenKey]      | `string`   | `&quot;&#x27;_t_&#x27;&quot;`       | query param key for `token`                                           |
| [config.checksumKey]   | `string`   | `&quot;&#x27;_cs_&#x27;&quot;`      | query param key for `checksum`                                        |


## WalletHandlers

**Kind**: global class  

* [WalletHandlers](#WalletHandlers)
  * [new WalletHandlers(config)](#new_WalletHandlers_new)
  * [attach(config)](#WalletHandlers+attach) ⇒

### new WalletHandlers(config)

Creates an instance of DID Auth Handlers.

| Param                 | Type       | Default | Description                                                                                                                   |
| --------------------- | ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| config                | `object`   |         |                                                                                                                               |
| config.tokenGenerator | `function` |         | function to generate action token                                                                                             |
| config.tokenStorage   | `object`   |         | function to generate action token                                                                                             |
| config.authenticator  | `object`   |         | Authenticator instance that can to jwt sign/verify                                                                            |
| [config.onPreAuth]    | `function` | `noop`  | function called before each auth request send back to app, used to check for permission, throw error to halt the auth process |

### walletHandlers.attach(config) ⇒

Attach routes and handlers for authenticator
Now express app have route handlers attached to the following url

* `GET /api/did/{action}/token` create new token
* `GET /api/did/{action}/status` check for token status
* `GET /api/did/{action}/timeout` expire a token
* `GET /api/did/{action}/auth` create auth response
* `POST /api/did/{action}/auth` process payment request

**Kind**: instance method of [`WalletHandlers`](#WalletHandlers)  
**Returns**: void  

| Param                  | Type       | Default                            | Description                                                           |
| ---------------------- | ---------- | ---------------------------------- | --------------------------------------------------------------------- |
| config                 | `object`   |                                    | attach config { app, action, claims, prefix = '/api' }                |
| config.app             | `object`   |                                    | express instance to attach routes to                                  |
| config.claims          | `object`   |                                    | claims for this request                                               |
| config.action          | `string`   |                                    | action of this group of routes                                        |
| config.onAuth          | `function` |                                    | callback when user completed auth in abt wallet, and data posted back |
| [config.onComplete]    | `function` | `noop`                             | callback when the whole auth process is done, action token is removed |
| [config.onExpire]      | `function` | `noop`                             | callback when the action token expired                                |
| [config.onError]       | `function` | `console.error`                    | callback when there are some errors                                   |
| [config.prefix]        | `string`   | `&quot;&#x27;/api/did&#x27;&quot;` | url prefix for this group endpoints                                   |
| [config.sessionDidKey] | `string`   | `&quot;&#x27;user.did&#x27;&quot;` | key path to extract session user did from request object              |
| [config.tokenKey]      | `string`   | `&quot;&#x27;_t_&#x27;&quot;`      | query param key for `token`                                           |
| [config.checksumKey]   | `string`   | `&quot;&#x27;_cs_&#x27;&quot;`     | query param key for `checksum`                                        |


## ApplicationInfo

**Kind**: global typedef  
**Properties**

| Name        | Type     | Description                            |
| ----------- | -------- | -------------------------------------- |
| name        | `string` | application name                       |
| description | `string` | application description                |
| icon        | `string` | application icon/logo url              |
| path        | `string` | application icon/logo url              |
| publisher   | `string` | application did with `did:abt:` prefix |


## ChainInfo

**Kind**: global typedef  
**Properties**

| Name      | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| chainId   | `string` | application chain id                      |
| chainHost | `string` | graphql endpoint of the application chain |
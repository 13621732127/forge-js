export as namespace GraphQLClient;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = GraphQLClient;

/*~ Write your module's methods and properties in this class */
declare class GraphQLClient {
  config: any;
  schema: void;
  constructor(httpEndpoint: string);

  getQueries(): string[];
  getSubscriptions(): string[];
  getMutations(): string[];

  /**
   * Send raw query to ocap and return results
   *
   * @param {*} query
   * @memberof BaseClient
   * @return Promise
   */
  doRawQuery(query: any, requestOptions?: any): Promise<any>;
  doRawSubscription(query: any): Promise<any>;

  generateQueryFns(): void;
  generateSubscriptionFns(): void;
  generateMutationFns(): void;

  getAccountState(
    params: GraphQLClient.GetAccountStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAccountState>;
  getAssetAddress(
    params: GraphQLClient.GetAssetAddressParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAssetAddress>;
  getAssetState(
    params: GraphQLClient.GetAssetStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAssetState>;
  getAssets(
    params: GraphQLClient.GetAssetsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAssets>;
  getBlock(
    params: GraphQLClient.GetBlockParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlock>;
  getBlocks(
    params: GraphQLClient.GetBlocksParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlocks>;
  getChainInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetChainInfo>;
  getConfig(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetConfig>;
  getForgeState(
    params: GraphQLClient.GetForgeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeState>;
  getForgeStatistics(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStatistics>;
  getForgeStatisticsByDay(
    params: GraphQLClient.GetForgeStatisticsByDayParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStatistics>;
  getForgeStatisticsByHour(
    params: GraphQLClient.GetForgeStatisticsByHourParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStatistics>;
  getNetInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetNetInfo>;
  getStakeState(
    params: GraphQLClient.GetStakeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetStakeState>;
  getStakes(
    params: GraphQLClient.GetStakesParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetStakes>;
  getTopAccounts(
    params: GraphQLClient.GetTopAccountsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTopAccounts>;
  getTx(params: GraphQLClient.GetTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTx>;
  getUnconfirmedTxs(
    params: GraphQLClient.GetUnconfirmedTxsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetUnconfirmedTxs>;
  getValidatorsInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetValidatorsInfo>;
  listTransactions(
    params: GraphQLClient.ListTransactionsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListTransactions>;
  listWallet(): GraphQLClient.QueryResult<GraphQLClient.ResponseListWallet>;
  loadFile(
    params: GraphQLClient.LoadFileParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseLoadFile>;
  loadWallet(
    params: GraphQLClient.LoadWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseLoadWallet>;
  multisig(
    params: GraphQLClient.MultisigParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseMultisig>;
  pinFile(
    params: GraphQLClient.PinFileParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponsePinFile>;
  search(
    params: GraphQLClient.SearchParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseSearch>;
  signData(
    params: GraphQLClient.SignDataParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseSignData>;
  createTx(
    params: GraphQLClient.CreateTxParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseCreateTx>;
  createWallet(
    params: GraphQLClient.CreateWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseCreateWallet>;
  declare(params: GraphQLClient.DeclareParams): GraphQLClient.QueryResult<string>;
  declareNode(
    params: GraphQLClient.DeclareNodeParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseDeclareNode>;
  recoverWallet(
    params: GraphQLClient.RecoverWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseRecoverWallet>;
  removeWallet(
    params: GraphQLClient.RemoveWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseRemoveWallet>;
  sendTx(
    params: GraphQLClient.SendTxParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseSendTx>;
  storeFile(
    params: GraphQLClient.StoreFileParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseStoreFile>;
  unsubscribe(
    params: GraphQLClient.UnsubscribeParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseUnsubscribe>;
  subscribe(
    params: GraphQLClient.SubscribeParams
  ): GraphQLClient.SubscriptionResult<GraphQLClient.ResponseSubscribe>;
}

declare namespace GraphQLClient {
  export interface QueryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface SubscriptionResult<T> {
    then(fn: (result: GraphQLClient.Subscription<T>) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface Subscription<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }

  export enum EncodingType {
    BASE16,
    BASE58,
  }

  export enum HashType {
    KECCAK,
    KECCAK_384,
    KECCAK_512,
    SHA3,
    SHA3_384,
    SHA3_512,
  }

  export enum KeyType {
    ED25519,
    SECP256K1,
  }

  export enum RoleType {
    ROLE_ACCOUNT,
    ROLE_APPLICATION,
    ROLE_ASSET,
    ROLE_BOT,
    ROLE_DEVICE,
    ROLE_NODE,
    ROLE_SMART_CONTRACT,
    ROLE_STAKE,
    ROLE_VALIDATOR,
  }

  export enum StatusCode {
    INVALID_NONCE,
    EXPIRED_ASSET,
    INVALID_ASSET,
    UNTRANSFERRABLE_ASSET,
    INSUFFICIENT_DATA,
    UNSUPPORTED_TX,
    INVALID_MONIKER,
    EXPIRED_WALLET_TOKEN,
    INVALID_STAKE_STATE,
    EXPIRED_TX,
    FORBIDDEN,
    INVALID_CHAIN_ID,
    UNSUPPORTED_STAKE,
    INVALID_SENDER_STATE,
    INVALID_SIGNATURE,
    INVALID_SIGNER_STATE,
    INVALID_PASSPHRASE,
    INVALID_FORGE_STATE,
    CONSENSUS_RPC_ERROR,
    STORAGE_RPC_ERROR,
    INVALID_MULTISIG,
    INVALID_OWNER,
    READONLY_ASSET,
    INSUFFICIENT_FUND,
    INVALID_RECEIVER_STATE,
    NOENT,
    INSUFFICIENT_STAKE,
    INVALID_TX,
    ACTIVATED_ASSET,
    INVALID_WALLET,
    BANNED_UNSTAKE,
    ACCOUNT_MIGRATED,
    INTERNAL,
    INVALID_TX_SIZE,
    OK,
  }

  export enum UpgradeAction {
    BACKUP,
    CRASH_IF_FAIL,
    DROP_ADDRESS_BOOK,
    REPLACE,
    RESTART_ALL_IF_FAIL,
    RESTART_APP,
    RESTART_CONSENSUS,
    RESTART_DFS,
    RESTART_FORGE,
    RESTART_P2P,
    ROLLBACK_IF_FAIL,
    VERIFY,
  }

  export enum UpgradeType {
    CONFIG_APP,
    CONFIG_CONSENSUS,
    CONFIG_DFS,
    CONFIG_FORGE,
    CONFIG_P2P,
    EXE_APP,
    EXE_CONSENSUS,
    EXE_DFS,
    EXE_FORGE,
    EXE_P2P,
  }

  export interface AddressFilter {}

  export interface PageInput {}

  export interface PageOrder {}

  export interface TimeFilter {}

  export interface TypeFilter {}

  export interface AccountMigrateTx {
    pk: string;
    type: GraphQLClient.WalletType;
  }

  export interface AccountState {
    address: string;
    balance: string;
    context: GraphQLClient.StateContext;
    data: GraphQLClient.Any;
    migratedFrom: Array<string>;
    migratedTo: Array<string>;
    moniker: string;
    nonce: number;
    numAssets: number;
    numTxs: number;
    pinnedFiles: GraphQLClient.CircularQueue;
    pk: string;
    stake: GraphQLClient.StakeContext;
    type: GraphQLClient.WalletType;
  }

  export interface Any {
    typeUrl: string;
    value: string;
  }

  export interface AssetState {
    activated: boolean;
    address: string;
    context: GraphQLClient.StateContext;
    data: GraphQLClient.Any;
    expiredAt: string;
    moniker: string;
    owner: string;
    readonly: boolean;
    stake: GraphQLClient.StakeContext;
  }

  export interface BlockId {
    hash: string;
    partsHeader: GraphQLClient.PartSetHeader;
  }

  export interface BlockInfo {
    appHash: string;
    height: number;
    numTxs: number;
    proposer: string;
    time: string;
    totalTxs: number;
    txs: Array<TransactionInfo>;
  }

  export interface ChainInfo {
    address: string;
    appHash: string;
    blockHash: string;
    blockHeight: number;
    blockTime: string;
    consensusVersion: string;
    dataVersion: string;
    forgeAppsVersion: Array<ForgeAppsVersionEntry>;
    id: string;
    moniker: string;
    network: string;
    supportedTxs: Array<string>;
    synced: boolean;
    totalTxs: number;
    version: string;
    votingPower: number;
  }

  export interface CircularQueue {
    circular: boolean;
    fifo: boolean;
    items: Array<string>;
    maxItems: number;
    typeUrl: string;
  }

  export interface ConsensusParams {
    maxBytes: number;
    maxCandidates: number;
    maxGas: number;
    maxValidators: number;
    paramChanged: boolean;
    pubKeyTypes: Array<string>;
    validatorChanged: boolean;
    validators: Array<Validator>;
  }

  export interface ConsensusUpgradeTx {
    data: GraphQLClient.Any;
    maxBytes: number;
    maxCandidates: number;
    maxGas: number;
    maxValidators: number;
    validators: Array<Validator>;
  }

  export interface CreateAssetTx {
    data: GraphQLClient.Any;
    expiredAt: string;
    moniker: string;
    readonly: boolean;
  }

  export interface DeclareFileTx {
    hash: string;
  }

  export interface DeclareTx {
    data: GraphQLClient.Any;
    moniker: string;
    pk: string;
    type: GraphQLClient.WalletType;
  }

  export interface Evidence {
    height: number;
    time: string;
    totalVotingPower: number;
    type: string;
    validator: GraphQLClient.Validator;
  }

  export interface ExchangeInfo {
    assets: Array<string>;
    value: string;
  }

  export interface ExchangeTx {
    data: GraphQLClient.Any;
    expiredAt: string;
    receiver: GraphQLClient.ExchangeInfo;
    sender: GraphQLClient.ExchangeInfo;
    to: string;
  }

  export interface ForgeAppsVersionEntry {
    key: string;
    value: string;
  }

  export interface ForgeState {
    address: string;
    consensus: GraphQLClient.ConsensusParams;
    data: GraphQLClient.Any;
    dataVersion: string;
    forgeAppHash: string;
    rootHashes: GraphQLClient.StateRoot;
    stakeSummary: Array<StakeSummaryEntry>;
    tasks: Array<TasksEntry>;
    version: string;
  }

  export interface ForgeStatistics {
    numAccountMigrateTxs: Array<number>;
    numBlocks: Array<number>;
    numConsensusUpgradeTxs: Array<number>;
    numCreateAssetTxs: Array<number>;
    numDeclareFileTxs: Array<number>;
    numDeclareTxs: Array<number>;
    numExchangeTxs: Array<number>;
    numStakeTxs: Array<number>;
    numStakes: Array<string>;
    numSysUpgradeTxs: Array<number>;
    numTransferTxs: Array<number>;
    numTxs: Array<number>;
    numUpdateAssetTxs: Array<number>;
    numValidators: Array<number>;
  }

  export interface GeoInfo {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  }

  export interface Header {
    appHash: string;
    chainId: string;
    consensusHash: string;
    dataHash: string;
    evidenceHash: string;
    height: number;
    lastBlockId: GraphQLClient.BlockId;
    lastCommitHash: string;
    lastResultsHash: string;
    nextValidatorsHash: string;
    numTxs: number;
    proposerAddress: string;
    time: string;
    totalTxs: number;
    validatorsHash: string;
    version: GraphQLClient.Version;
  }

  export interface IndexedAccountState {
    address: string;
    balance: string;
    genesisTime: string;
    migratedFrom: string;
    migratedTo: string;
    moniker: string;
    nonce: number;
    numAssets: number;
    numTxs: number;
    renaissanceTime: string;
    totalReceivedStakes: string;
    totalStakes: string;
    totalUnstakes: string;
  }

  export interface IndexedAssetState {
    address: string;
    genesisTime: string;
    moniker: string;
    owner: string;
    readonly: boolean;
    renaissanceTime: string;
  }

  export interface IndexedStakeState {
    address: string;
    balance: string;
    genesisTime: string;
    message: string;
    receiver: string;
    renaissanceTime: string;
    sender: string;
    type: number;
  }

  export interface IndexedTransaction {
    hash: string;
    receiver: string;
    sender: string;
    time: string;
    tx: GraphQLClient.Transaction;
    type: string;
  }

  export interface KvPair {
    key: string;
    value: string;
  }

  export interface LastCommitInfo {
    round: number;
    votes: Array<VoteInfo>;
  }

  export interface NetInfo {
    listeners: Array<string>;
    listening: boolean;
    nPeers: number;
    peers: Array<PeerInfo>;
  }

  export interface NodeInfo {
    consensusVersion: string;
    geoInfo: GraphQLClient.GeoInfo;
    id: string;
    ip: string;
    moniker: string;
    network: string;
  }

  export interface PageInfo {
    cursor: string;
    next: boolean;
    total: number;
  }

  export interface PartSetHeader {
    hash: string;
    total: number;
  }

  export interface PeerInfo {
    nodeInfo: GraphQLClient.NodeInfo;
  }

  export interface PubKey {
    data: string;
    type: string;
  }

  export interface RequestBeginBlock {
    byzantineValidators: Array<Evidence>;
    hash: string;
    header: GraphQLClient.Header;
    lastCommitInfo: GraphQLClient.LastCommitInfo;
  }

  export interface RequestEndBlock {
    height: number;
  }

  export interface ResponseCreateTx {
    code: GraphQLClient.StatusCode;
    tx: GraphQLClient.Transaction;
  }

  export interface ResponseCreateWallet {
    code: GraphQLClient.StatusCode;
    token: string;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseDeclareNode {
    code: GraphQLClient.StatusCode;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseGetAccountState {
    code: GraphQLClient.StatusCode;
    state: GraphQLClient.AccountState;
  }

  export interface ResponseGetAssetAddress {
    assetAddress: string;
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseGetAssetState {
    code: GraphQLClient.StatusCode;
    state: GraphQLClient.AssetState;
  }

  export interface ResponseGetAssets {
    assets: Array<IndexedAssetState>;
    code: GraphQLClient.StatusCode;
    page: GraphQLClient.PageInfo;
  }

  export interface ResponseGetBlock {
    block: GraphQLClient.BlockInfo;
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseGetBlocks {
    blocks: Array<BlockInfo>;
    code: GraphQLClient.StatusCode;
    page: GraphQLClient.PageInfo;
  }

  export interface ResponseGetChainInfo {
    code: GraphQLClient.StatusCode;
    info: GraphQLClient.ChainInfo;
  }

  export interface ResponseGetConfig {
    code: GraphQLClient.StatusCode;
    config: string;
  }

  export interface ResponseGetForgeState {
    code: GraphQLClient.StatusCode;
    state: GraphQLClient.ForgeState;
  }

  export interface ResponseGetForgeStatistics {
    code: GraphQLClient.StatusCode;
    forgeStatistics: GraphQLClient.ForgeStatistics;
  }

  export interface ResponseGetNetInfo {
    code: GraphQLClient.StatusCode;
    netInfo: GraphQLClient.NetInfo;
  }

  export interface ResponseGetStakeState {
    code: GraphQLClient.StatusCode;
    state: GraphQLClient.StakeState;
  }

  export interface ResponseGetStakes {
    code: GraphQLClient.StatusCode;
    page: GraphQLClient.PageInfo;
    stakes: Array<IndexedStakeState>;
  }

  export interface ResponseGetTopAccounts {
    accounts: Array<IndexedAccountState>;
    code: GraphQLClient.StatusCode;
    page: GraphQLClient.PageInfo;
  }

  export interface ResponseGetTx {
    code: GraphQLClient.StatusCode;
    info: GraphQLClient.TransactionInfo;
  }

  export interface ResponseGetUnconfirmedTxs {
    code: GraphQLClient.StatusCode;
    unconfirmedTxs: GraphQLClient.UnconfirmedTxs;
  }

  export interface ResponseGetValidatorsInfo {
    code: GraphQLClient.StatusCode;
    validatorsInfo: GraphQLClient.ValidatorsInfo;
  }

  export interface ResponseListTransactions {
    code: GraphQLClient.StatusCode;
    page: GraphQLClient.PageInfo;
    transactions: Array<IndexedTransaction>;
  }

  export interface ResponseListWallet {
    address: Array<string>;
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseLoadFile {
    chunk: string;
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseLoadWallet {
    code: GraphQLClient.StatusCode;
    token: string;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseMultisig {
    code: GraphQLClient.StatusCode;
    tx: GraphQLClient.Transaction;
  }

  export interface ResponsePinFile {
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseRecoverWallet {
    code: GraphQLClient.StatusCode;
    token: string;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseRemoveWallet {
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseSearch {
    code: GraphQLClient.StatusCode;
    txs: Array<TransactionInfo>;
  }

  export interface ResponseSendTx {
    code: GraphQLClient.StatusCode;
    hash: string;
  }

  export interface ResponseSignData {
    code: GraphQLClient.StatusCode;
    signedData: string;
  }

  export interface ResponseStoreFile {
    code: GraphQLClient.StatusCode;
    hash: string;
  }

  export interface ResponseSubscribe {
    accountMigrate: GraphQLClient.Transaction;
    accountState: GraphQLClient.Transaction;
    assetState: GraphQLClient.Transaction;
    beginBlock: GraphQLClient.RequestBeginBlock;
    code: GraphQLClient.StatusCode;
    confirm: GraphQLClient.Transaction;
    consensusUpgrade: GraphQLClient.Transaction;
    createAsset: GraphQLClient.Transaction;
    declare: GraphQLClient.Transaction;
    declareFile: GraphQLClient.Transaction;
    endBlock: GraphQLClient.RequestEndBlock;
    exchange: GraphQLClient.Transaction;
    forgeState: GraphQLClient.Transaction;
    revoke: GraphQLClient.Transaction;
    stake: GraphQLClient.Transaction;
    stakeState: GraphQLClient.Transaction;
    sysUpgrade: GraphQLClient.Transaction;
    topic: string;
    transfer: GraphQLClient.Transaction;
    updateAsset: GraphQLClient.Transaction;
  }

  export interface ResponseUnsubscribe {
    code: GraphQLClient.StatusCode;
  }

  export interface StakeContext {
    recentReceivedStakes: GraphQLClient.CircularQueue;
    recentStakes: GraphQLClient.CircularQueue;
    totalReceivedStakes: string;
    totalStakes: string;
    totalUnstakes: string;
  }

  export interface StakeDataType {
    type: string;
  }

  export interface StakeState {
    address: string;
    balance: string;
    context: GraphQLClient.StateContext;
    data: GraphQLClient.Any;
    from: string;
    message: string;
    to: string;
  }

  export interface StakeSummary {
    context: GraphQLClient.StateContext;
    totalStakes: string;
    totalUnstakes: string;
  }

  export interface StakeSummaryEntry {
    key: number;
    value: GraphQLClient.StakeSummary;
  }

  export interface StakeTx {
    data: GraphQLClient.StakeDataType;
    message: string;
    to: string;
    value: string;
  }

  export interface StateContext {
    genesisTime: string;
    genesisTx: GraphQLClient.TransactionInfo;
    renaissanceTime: string;
    renaissanceTx: GraphQLClient.TransactionInfo;
  }

  export interface StateRoot {
    account: string;
    asset: string;
    receipt: string;
  }

  export interface SysUpgradeTx {
    data: GraphQLClient.Any;
    gracePeriod: number;
    task: GraphQLClient.UpgradeTask;
  }

  export interface TasksEntry {
    key: number;
    value: GraphQLClient.UpgradeTasks;
  }

  export interface Transaction {
    chainId: number;
    from: string;
    itx: Itx;
    nonce: number;
    signature: string;
    signatures: Array<KvPair>;
  }

  export interface TransactionInfo {
    code: GraphQLClient.StatusCode;
    hash: string;
    height: number;
    index: number;
    tags: Array<KvPair>;
    tx: GraphQLClient.Transaction;
  }

  export interface TransferTx {
    assets: Array<string>;
    data: GraphQLClient.Any;
    to: string;
    value: string;
  }

  export interface UnconfirmedTxs {
    nTxs: number;
    txs: Array<Transaction>;
  }

  export interface UpdateAssetTx {
    address: string;
    data: GraphQLClient.Any;
    moniker: string;
  }

  export interface UpgradeTask {
    actions: Array<UpgradeAction>;
    dataHash: string;
    type: GraphQLClient.UpgradeType;
  }

  export interface UpgradeTasks {
    item: Array<UpgradeTask>;
  }

  export interface Validator {
    address: string;
    power: number;
  }

  export interface ValidatorInfo {
    address: string;
    name: string;
    proposerPriority: string;
    pubKey: GraphQLClient.PubKey;
    votingPower: number;
  }

  export interface ValidatorsInfo {
    blockHeight: number;
    validators: Array<ValidatorInfo>;
  }

  export interface Version {
    App: number;
    Block: number;
  }

  export interface VoteInfo {
    signedLastBlock: boolean;
    validator: GraphQLClient.Validator;
  }

  export interface WalletInfo {
    address: string;
    pk: string;
    sk: string;
    type: GraphQLClient.WalletType;
  }

  export interface WalletType {
    address: GraphQLClient.EncodingType;
    hash: GraphQLClient.HashType;
    pk: GraphQLClient.KeyType;
    role: GraphQLClient.RoleType;
  }

  export type Itx =
    | GraphQLClient.UpdateAssetTx
    | GraphQLClient.TransferTx
    | GraphQLClient.SysUpgradeTx
    | GraphQLClient.StakeTx
    | GraphQLClient.ExchangeTx
    | GraphQLClient.DeclareFileTx
    | GraphQLClient.DeclareTx
    | GraphQLClient.CreateAssetTx
    | GraphQLClient.ConsensusUpgradeTx
    | GraphQLClient.AccountMigrateTx;

  export interface GetAccountStateParams {
    address: string;
    appHash: string;
    keys: Array<string>;
  }

  export interface GetAssetAddressParams {
    itx: string;
    senderAddress: string;
    walletType: string;
  }

  export interface GetAssetStateParams {
    address: string;
    appHash: string;
    keys: Array<string>;
  }

  export interface GetAssetsParams {
    ownerAddress: string;
    paging: undefined;
  }

  export interface GetBlockParams {
    height: number;
  }

  export interface GetBlocksParams {
    emptyExcluded: boolean;
    maxHeight: number;
    minHeight: number;
    paging: undefined;
  }

  export interface GetForgeStateParams {
    appHash: string;
    keys: Array<string>;
  }

  export interface GetForgeStatisticsByDayParams {
    endDate: string;
    startDate: string;
  }

  export interface GetForgeStatisticsByHourParams {
    date: string;
  }

  export interface GetStakeStateParams {
    address: string;
    appHash: string;
    keys: Array<string>;
  }

  export interface GetStakesParams {
    addressFilter: undefined;
    paging: undefined;
  }

  export interface GetTopAccountsParams {
    paging: undefined;
  }

  export interface GetTxParams {
    hash: string;
  }

  export interface GetUnconfirmedTxsParams {
    limit: number;
  }

  export interface ListTransactionsParams {
    addressFilter: undefined;
    paging: undefined;
    timeFilter: undefined;
    typeFilter: undefined;
  }

  export interface LoadFileParams {
    hash: string;
  }

  export interface LoadWalletParams {
    address: string;
    passphrase: string;
  }

  export interface MultisigParams {
    token: string;
    tx: string;
    wallet: string;
  }

  export interface PinFileParams {
    hash: string;
  }

  export interface SearchParams {
    key: string;
    value: string;
  }

  export interface SignDataParams {
    data: string;
    token: string;
    wallet: string;
  }

  export interface CreateTxParams {
    from: string;
    itx: string;
    itxType: string;
    nonce: number;
    token: string;
    wallet: string;
  }

  export interface CreateWalletParams {
    moniker: string;
    passphrase: string;
    type: string;
  }

  export interface DeclareParams {
    declareTx: string;
    send: string;
    sign: boolean;
    token: string;
    wallet: string;
  }

  export interface DeclareNodeParams {
    validator: boolean;
  }

  export interface RecoverWalletParams {
    data: string;
    moniker: string;
    passphrase: string;
    type: string;
  }

  export interface RemoveWalletParams {
    address: string;
  }

  export interface SendTxParams {
    commit: boolean;
    token: string;
    tx: string;
    wallet: string;
  }

  export interface StoreFileParams {
    chunk: string;
  }

  export interface UnsubscribeParams {
    topic: string;
  }

  export interface SubscribeParams {
    filter: string;
    type: string;
  }
}
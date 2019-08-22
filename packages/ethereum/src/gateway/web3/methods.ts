// All supported web3 rpc methods.
const WEB3_RPC_METHODS = [
  { method: 'eth_protocolVersion' },
  { method: 'eth_syncing' },
  { method: 'eth_coinbase' },
  { method: 'eth_mining' },
  { method: 'eth_hashrate' },
  { method: 'eth_gasPrice' },
  { method: 'eth_accounts' },
  { method: 'eth_blockNumber' },
  { method: 'eth_getBalance' },
  { method: 'eth_getStorageAt' },
  { method: 'eth_getTransactionCount' },
  { method: 'eth_getBlockTransactionCountByHash' },
  { method: 'eth_getBlockTransactionCountByNumber' },
  { method: 'eth_getUncleCountByBlockHash' },
  { method: 'eth_getUncleCountByBlockNumber' },
  { method: 'eth_getCode' },
  { method: 'eth_sign' },
  { method: 'eth_sendTransaction' },
  { method: 'eth_sendRawTransaction' },
  { method: 'eth_call' },
  { method: 'eth_estimateGas' },
  { method: 'eth_getBlockByHash' },
  { method: 'eth_getBlockByNumber' },
  { method: 'eth_getTransactionByHash' },
  { method: 'eth_getTransactionByBlockHashAndIndex' },
  { method: 'eth_getTransactionByBlockNumberAndIndex' },
  { method: 'eth_getTransactionReceipt' },
  { method: 'eth_pendingTransactions' },
  { method: 'eth_getUncleByBlockHashAndIndex' },
  { method: 'eth_getUncleByBlockNumberAndIndex' },
  { method: 'eth_newFilter' },
  { method: 'eth_newBlockFilter' },
  { method: 'eth_newPendingTransactionFilter' },
  { method: 'eth_uninstallFilter' },
  { method: 'eth_getFilterChanges' },
  { method: 'eth_getFilterLogs' },
  { method: 'eth_getLogs' },
  { method: 'eth_getWork' },
  { method: 'eth_submitWork' },
  { method: 'eth_submitHashrate' },
  { method: 'eth_getProof' },
  { method: 'eth_subscribe' },
  { method: 'eth_unsubscribe' },
  { method: 'net_version' },
  { method: 'net_listening' },
  { method: 'net_peerCount' },
  { method: 'oasis_getPublicKey' },
  { method: 'oasis_getExpiry' },
  { method: 'oasis_invoke' }
];

export default WEB3_RPC_METHODS;

---
title: "Listen for Pending Transaction"
---

Listen for a pending transaction. This method will return an observable which you can listen to in order to know when a transaction has been mined. If it has been mined, it will immediately return with the status.

## Example Request

```javascript
cindercloud.ethereum()
           .transaction()
           .listenPendingTransaction('0x63e3c4f23d75559c463af93b5fe39c6aa3325e0c6e138b4c864549d82f1972d4');
```

## Example Response Observable

```json
{
  "hash":"0x63e3c4f23d75559c463af93b5fe39c6aa3325e0c6e138b4c864549d82f1972d4",
  "nonce":20791960,
  "gas":50000,
  "gasPrice":1000000000,
  "pendingTransactionStatus":"MINED"
}
```
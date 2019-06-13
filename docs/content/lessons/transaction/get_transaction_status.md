---
title: "Get Transaction Status"
---

Fetch the status of an Ethereum transaction. Mainly used to see if a transaction has been mined yet or is still pending.
## Example Request

```javascript
cindercloud.ethereum()
           .transaction()
           .getTransactionStatus('0x63e3c4f23d75559c463af93b5fe39c6aa3325e0c6e138b4c864549d82f1972d4');
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
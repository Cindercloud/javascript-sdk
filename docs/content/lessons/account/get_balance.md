---
title: "Get Balance"
---

Get the balance of an Ethereum account. The result is the full balance in WEI.

## Request

```javascript
cindercloud.ethereum()
           .account(address)
           .getBalance();
```

## Example Response Observable

```json
{
    "balance": "179.71975181", 
    "rawBalance": "179719751810239407373"
}
```


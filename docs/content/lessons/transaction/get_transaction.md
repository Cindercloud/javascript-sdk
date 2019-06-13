---
title: "Get Transaction Information"
---

Fetch general information about an Ethereum transaction.
## Example Request

```javascript
cindercloud.ethereum()
           .transaction()
           .getTransaction('0x63e3c4f23d75559c463af93b5fe39c6aa3325e0c6e138b4c864549d82f1972d4');
```

## Example Response Observable

```json
{
  "hash":"0x63e3c4f23d75559c463af93b5fe39c6aa3325e0c6e138b4c864549d82f1972d4",
  "nonce":20791960,
  "blockHash":"0xe435eed93fec7c3b42e12a046b98f531e0a3a4acccdd365da4fedd4600458550",
  "blockNumber":7855767,
  "transactionIndex":99,
  "from":"0xea674fdde714fd979de3edf0f56aa9716b898ec8",
  "to":"0x215f49994e57eeb40bb2b8feef31b7db14447454",
  "value":95839872785405506,
  "gasPrice":1000000000,
  "gas":50000,
  "input":"0x",
  "creates":null,
  "publicKey":"0x5d8af02c52b1fb40e45d6e04ae2351d443d1f7327e9b6dbb5ae1d918414899c625690c4c236889e23d9705f9db88876542b959d947a3497a30d0d922ee30015f",
  "raw":"0xf86f84013d4298843b9aca0082c35094215f49994e57eeb40bb2b8feef31b7db144474548801547ddb44b156428025a0ee83c505788fc49b902a80641f68144eea9972ab97562f77ef1f220e01cac4dfa017257bdce2637230af66b774e46467d83488f8c397b29f9e1c14fef421300c4f",
  "r":"0xee83c505788fc49b902a80641f68144eea9972ab97562f77ef1f220e01cac4df",
  "s":"0x17257bdce2637230af66b774e46467d83488f8c397b29f9e1c14fef421300c4f",
  "v":37,
  "nonceRaw":"0x13d4298",
  "transactionIndexRaw":"0x63",
  "blockNumberRaw":"0x77de97",
  "chainId":1,
  "gasPriceRaw":"0x3b9aca00",
  "gasRaw":"0xc350",
  "valueRaw":"0x1547ddb44b15642"
}
```
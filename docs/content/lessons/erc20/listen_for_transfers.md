---
title: "Listen for Transfers"
---

Listen for transfers for an ERC20 token. 

## Example Request

```javascript
cindercloud.ethereum()
           .erc20('0xB8c77482e45F1F44dE1745F52C74426C631bDD52')
           .listenForTransfers()
           .subscribe(
                (transfer) => {
                      console.log(transfer);
                }
           );
```

## Example Response Observable

```json
{
  "from" : "0x9ae49c0d7f8f9ef4b864e004fe86ac8294e20950",
  "to" : "0x04a487afd662c4f9deacc07a7b10cfb686b682a4",
  "amount": 405862294683723403964
}
```
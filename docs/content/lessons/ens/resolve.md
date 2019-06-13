---
title: "Resolve"
---

Resolves an ENS to an address. Will return a default value if the ENS resolves to nothing.


## Example Request

```javascript
cindercloud.ethereum()
           .ens()
           .resolve('mewtopia');
```

## Example Response Observable

```json
{
    "address": "0xdecaf9cd2367cdbb726e904cd6397edfcae6068d",
    "domain": "mewtopia.eth"
}
```
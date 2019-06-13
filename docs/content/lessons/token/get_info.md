---
title: "Get Information"
---

Fetch general information about a token. The Token can be an ERC20, ERC223 or NFT.

## Example Request

```javascript
cindercloud.ethereum()
           .token('0x4df47b4969b2911c966506e3592c41389493953b')
           .getInfo();
```

## Example Response Observable

```json
{
    "symbol": "FND",
    "address": "0x4DF47B4969B2911C966506E3592c41389493953b",
    "decimals": 18,
    "name": "FundRequest",
    "website": "https://fundrequest.io",
    "social": {
        "blog": "https://blog.fundrequest.io",
        "chat": "https://fundrequest.chat",
        "facebook": "https://www.facebook.com/FundRequestplatform",
        "forum": "",
        "github": "https://github.com/FundRequest",
        "gitter": "",
        "instagram": "",
        "linkedin": "https://www.linkedin.com/company/fundrequest",
        "reddit": "https://www.reddit.com/r/fundrequest",
        "slack": "",
        "telegram": "https://t.me/fundrequestofficial",
        "twitter": "https://twitter.com/fundrequest_io",
        "youtube": ""
    },
    "logo": {
        "src": "https://raw.githubusercontent.com/FundRequest/logo/master/Logo%20icon%20500x500.png",
        "width": "500",
        "height": "500",
        "ipfs_hash": "QmbGpu4tWoHEtPy64tNeYENsNqTSF22U12VRYswhjYjNcj"
    },
    "support": {
        "email": "info@fundrequest.io",
        "url": ""
    },
    "ens_address": ""
}
```
---
title: "Listen For Events"
---

Listen for live events which are emitted from a contract. The function returns an observable.

## Example Request

```javascript
cindercloud.ethereum()
			.contracts()
			.eventLive({
				abi: [{
					"anonymous": false,
					"inputs": [{"indexed": true, "name": "from", "type": "address"}, {
						"indexed": true,
						"name": "to",
						"type": "address"
					}, {"indexed": false, "name": "value", "type": "uint256"}],
					"name": "Transfer",
					"type": "event"
				}],
				address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
				event: "Transfer"
			}).subscribe(
                (event) => {
                    console.log(event);
                }
            );
```

## Example Response Observable

```json
{
  "values": {
        "from":"0xf3c461ecc55239776e026efa0ca2405e681ac7ef",
        "to":"0xee37f338220479c8f652e3557f02513bdb11c160",
        "value":1002009990000000000000
    }
}
```
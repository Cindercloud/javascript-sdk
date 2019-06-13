---
title: "Initialization"
---

## Creating a new instance of the API

Before the API can be used, we'll need to create a new instance of the API.

```javascript
const cindercloud = new Cindercloud();
```

## Properties

The api can be initialized with following properties:

```javascript
const cindercloud = new Cindercloud({
	    baseUrl: 'https://localhost:8080' //default https://api.cinder.cloud
	});
```
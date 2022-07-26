# <img src="https://github.com/pip-services/pip-services/raw/master/design/Logo.png" alt="Pip.Services Logo" style="max-width:30%"> <br/> Reviews Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-reviews-node](https://github.com/pip-services-ecommerce2/service-reviews-node) microservice.
It provides an easy to use abstraction over communication protocols:

* Direct client
* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client (see https://aws.amazon.com/lambda)

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-reviews-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-reviews-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.reviewsHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
    ...
```

Now the client is ready to perform operations
```javascript
// Create a new review
var review = {
    id: '1',
    party_id: '1',
    product_id: '1',
    rating: 0,
    full_review: true
};

let rating = await client.submitReview(
    null,
    review
);
```

```javascript
// Get the list of reviews
let page = await client.getReviews(
    null,
    {
        product_id: '1'
    },
    {
        total: true,
        skip: 0,
        take: 10
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Denis Kuznetsov*.


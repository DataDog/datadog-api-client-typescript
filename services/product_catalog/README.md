# @datadog/datadog-api-client-product-catalog

## Description

Look up the Datadog SKUs that are generally available, together with the public list
prices, allotments, and tiered pricing that apply to them on a given date.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-product-catalog
# Yarn
yarn add @datadog/datadog-api-client-product-catalog
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ProductCatalogApiV2 } from "@datadog/datadog-api-client-product-catalog";
import { v2 } from "@datadog/datadog-api-client-product-catalog";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ProductCatalogApi.v2.listProductCatalogSKUs": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ProductCatalogApiV2(configuration);
const params = {/* parameters */};

apiInstance.listProductCatalogSKUs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
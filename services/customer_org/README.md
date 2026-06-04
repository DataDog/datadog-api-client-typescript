# @datadog/datadog-api-client-customer-org

## Description

Programmatic management of a customer's Datadog organization. Use this API to perform
self-service organization lifecycle actions such as disabling the authenticated org.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-customer-org
# Yarn
yarn add @datadog/datadog-api-client-customer-org
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CustomerOrgApiV2 } from "@datadog/datadog-api-client-customer-org";
import { v2 } from "@datadog/datadog-api-client-customer-org";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CustomerOrgApi.v2.disableCustomerOrg": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CustomerOrgApiV2(configuration);
const params = {/* parameters */};

apiInstance.disableCustomerOrg(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
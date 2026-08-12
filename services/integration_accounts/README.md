# @datadog/datadog-api-client-integration-accounts

## Description

Manage accounts for Datadog integrations served by the Account Management Service (AMS). The account payload is strongly typed per integration and interface.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-integration-accounts
# Yarn
yarn add @datadog/datadog-api-client-integration-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IntegrationAccountsApiV2 } from "@datadog/datadog-api-client-integration-accounts";
import { v2 } from "@datadog/datadog-api-client-integration-accounts";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "IntegrationAccountsApi.v2.listIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new IntegrationAccountsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listIntegrationAccounts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
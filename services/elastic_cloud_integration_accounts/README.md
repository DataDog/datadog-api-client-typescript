# @datadog/datadog-api-client-elastic-cloud-integration-accounts

## Description

Manage Elastic Cloud accounts for the Elastic Cloud integration, served by the Account Management Service (AMS). The account payload is strongly typed to Elastic Cloud; the supported interfaces (monitoring and Cloud Cost Management) are modeled as a nested union.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-elastic-cloud-integration-accounts
# Yarn
yarn add @datadog/datadog-api-client-elastic-cloud-integration-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ElasticCloudIntegrationAccountsApiV2 } from "@datadog/datadog-api-client-elastic-cloud-integration-accounts";
import { v2 } from "@datadog/datadog-api-client-elastic-cloud-integration-accounts";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ElasticCloudIntegrationAccountsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listElasticCloudIntegrationAccounts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
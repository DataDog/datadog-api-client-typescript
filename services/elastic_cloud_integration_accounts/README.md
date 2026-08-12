# @datadog/datadog-api-client-elastic-cloud-integration-accounts

## Description

Manage Elastic Cloud accounts for the Elastic Cloud integration, served by the Account Management Service (AMS). Each supported interface has its own concrete, strongly typed CRUD operations: monitoring (`elastic-cloud`) and Cloud Cost Management (`elastic-cloud-ccm`).

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
        "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudCcmAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ElasticCloudIntegrationAccountsApiV2(configuration);

apiInstance.listElasticCloudCcmAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
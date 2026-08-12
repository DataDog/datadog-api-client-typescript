# @datadog/datadog-api-client-elastic-cloud-cloud-cost-management

## Description

Manage Elastic Cloud accounts for the Cloud Cost Management interface (`elastic-cloud-ccm`), served by the Account Management Service (AMS). Concrete, strongly typed CRUD operations for the Cloud Cost Management interface.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-elastic-cloud-cloud-cost-management
# Yarn
yarn add @datadog/datadog-api-client-elastic-cloud-cloud-cost-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ElasticCloudCloudCostManagementApiV2 } from "@datadog/datadog-api-client-elastic-cloud-cloud-cost-management";
import { v2 } from "@datadog/datadog-api-client-elastic-cloud-cloud-cost-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ElasticCloudCloudCostManagementApi.v2.listElasticCloudCcmAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ElasticCloudCloudCostManagementApiV2(configuration);

apiInstance.listElasticCloudCcmAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
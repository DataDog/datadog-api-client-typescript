# @datadog/datadog-api-client-elastic-cloud-monitoring

## Description

Manage Elastic Cloud accounts for the monitoring interface (`elastic-cloud`), served by the Account Management Service (AMS). Concrete, strongly typed CRUD operations for the monitoring interface.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-elastic-cloud-monitoring
# Yarn
yarn add @datadog/datadog-api-client-elastic-cloud-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ElasticCloudMonitoringApiV2 } from "@datadog/datadog-api-client-elastic-cloud-monitoring";
import { v2 } from "@datadog/datadog-api-client-elastic-cloud-monitoring";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ElasticCloudMonitoringApi.v2.listElasticCloudMonitoringAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ElasticCloudMonitoringApiV2(configuration);

apiInstance.listElasticCloudMonitoringAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
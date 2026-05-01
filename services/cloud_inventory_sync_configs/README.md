# @datadog/datadog-api-client-cloud-inventory-sync-configs

## Description

Configure cloud inventory file synchronization from your cloud storage to Datadog.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-cloud-inventory-sync-configs
# Yarn
yarn add @datadog/datadog-api-client-cloud-inventory-sync-configs
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CloudInventorySyncConfigsApiV2 } from "@datadog/datadog-api-client-cloud-inventory-sync-configs";
import { v2 } from "@datadog/datadog-api-client-cloud-inventory-sync-configs";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CloudInventorySyncConfigsApi.v2.upsertSyncConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CloudInventorySyncConfigsApiV2(configuration);
const params = {/* parameters */};

apiInstance.upsertSyncConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
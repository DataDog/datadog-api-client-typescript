# @datadog/datadog-api-client-data-deletion

## Description

The Data Deletion API allows the user to target and delete data from the allowed products. It's currently enabled for Logs and RUM and depends on `logs_delete_data` and `rum_delete_data` permissions respectively.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-data-deletion
# Yarn
yarn add @datadog/datadog-api-client-data-deletion
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DataDeletionApiV2 } from "@datadog/datadog-api-client-data-deletion";
import { v2 } from "@datadog/datadog-api-client-data-deletion";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DataDeletionApi.v2.createDataDeletionRequest": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DataDeletionApiV2(configuration);
const params = {/* parameters */};

apiInstance.createDataDeletionRequest(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-data-access-controls

## Description

Manage [Data Access Controls](https://docs.datadoghq.com/account_management/rbac/data_access/)
programmatically using Datasets.

Data Access Controls in Datadog allows administrators and access managers to regulate
access to sensitive data. By defining Restricted Datasets, you can ensure that only specific teams or roles can
view certain types of telemetry (for example, logs, traces, metrics, and RUM data).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-data-access-controls
# Yarn
yarn add @datadog/datadog-api-client-data-access-controls
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DataAccessControlsApiV2 } from "@datadog/datadog-api-client-data-access-controls";
import { v2 } from "@datadog/datadog-api-client-data-access-controls";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DataAccessControlsApi.v2.getAllDatasets": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DataAccessControlsApiV2(configuration);

apiInstance.getAllDatasets().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
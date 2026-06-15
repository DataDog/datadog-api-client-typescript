# @datadog/datadog-api-client-data-observability

## Description

Manage and run data observability monitors.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-data-observability
# Yarn
yarn add @datadog/datadog-api-client-data-observability
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DataObservabilityApiV2 } from "@datadog/datadog-api-client-data-observability";
import { v2 } from "@datadog/datadog-api-client-data-observability";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DataObservabilityApi.v2.getDataObservabilityMonitorRunStatus": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DataObservabilityApiV2(configuration);
const params = {/* parameters */};

apiInstance.getDataObservabilityMonitorRunStatus(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
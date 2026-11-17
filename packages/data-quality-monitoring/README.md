# Data Quality Monitoring

`@datadog/datadog-api-client-data-quality-monitoring`

## Description

Data Observability monitor runs.

Products: Data Observability: Quality Monitoring

Manage and run data observability monitors.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-data-quality-monitoring
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-data-quality-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-data-quality-monitoring";

const configuration = createConfiguration();
configuration.unstableOperations["v2.getDataObservabilityMonitorRunStatus"] = true;
const apiInstance = new v2.DataObservabilityApi(configuration);
const params = {/* parameters */};

apiInstance.getDataObservabilityMonitorRunStatus(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
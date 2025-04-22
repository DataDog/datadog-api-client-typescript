# @datadog/datadog-api-client-logs-metrics

## Description

Manage configuration of [log-based metrics](https://app.datadoghq.com/logs/pipelines/generate-metrics) for your organization.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs-metrics
# Yarn
yarn add @datadog/datadog-api-client-logs-metrics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsMetricsApiV2 } from "@datadog/datadog-api-client-logs-metrics";
import { v2 } from "@datadog/datadog-api-client-logs-metrics";

const configuration = createConfiguration();
const apiInstance = new LogsMetricsApiV2(configuration);

apiInstance.listLogsMetrics(params).then((data: v2.LogsMetricsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
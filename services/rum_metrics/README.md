# @datadog/datadog-api-client-rum-metrics

## Description

Manage configuration of [rum-based metrics](https://app.datadoghq.com/rum/generate-metrics) for your organization.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-metrics
# Yarn
yarn add @datadog/datadog-api-client-rum-metrics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumMetricsApiV2 } from "@datadog/datadog-api-client-rum-metrics";
import { v2 } from "@datadog/datadog-api-client-rum-metrics";

const configuration = createConfiguration();
const apiInstance = new RumMetricsApiV2(configuration);

apiInstance.listRumMetrics(params).then((data: v2.RumMetricsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
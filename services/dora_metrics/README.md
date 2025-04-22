# @datadog/datadog-api-client-dora-metrics

## Description

Send events for DORA Metrics to measure and improve software delivery. See the [DORA Metrics page](https://docs.datadoghq.com/dora_metrics/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dora-metrics
# Yarn
yarn add @datadog/datadog-api-client-dora-metrics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DORAMetricsApiV2 } from "@datadog/datadog-api-client-dora-metrics";

const configuration = createConfiguration();
configuration.unstableOperations["v2.createDORADeployment"] = true;
const apiInstance = new DORAMetricsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.createDORADeployment(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
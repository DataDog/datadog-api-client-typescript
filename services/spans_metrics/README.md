# @datadog/datadog-api-client-spans-metrics

## Description

Manage configuration of [span-based metrics](https://app.datadoghq.com/apm/traces/generate-metrics) for your organization. See [Generate Metrics from Spans](https://docs.datadoghq.com/tracing/trace_pipeline/generate_metrics/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-spans-metrics
# Yarn
yarn add @datadog/datadog-api-client-spans-metrics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SpansMetricsApiV2 } from "@datadog/datadog-api-client-spans-metrics";

const configuration = createConfiguration();
const apiInstance = new SpansMetricsApiV2(configuration);

const result = await apiInstance.listSpansMetrics(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
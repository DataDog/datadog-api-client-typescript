# APM

`@datadog/datadog-api-client-apm`

## Description

Traces, spans, retention filters and span-based metrics.

Products: APM

Observe, troubleshoot, and improve cloud-scale applications with all telemetry in context

Manage configuration of [APM retention filters](https://app.datadoghq.com/apm/traces/retention-filters) for your organization. You need an API and application key with Admin rights to interact with this endpoint. See [retention filters](https://docs.datadoghq.com/tracing/trace_pipeline/trace_retention/#retention-filters) on the Trace Retention page for more information.

Retrieve full or pruned APM traces by trace ID.

Search and aggregate your spans from your Datadog platform over HTTP.

Manage configuration of [span-based metrics](https://app.datadoghq.com/apm/traces/generate-metrics) for your organization. See [Generate Metrics from Spans](https://docs.datadoghq.com/tracing/trace_pipeline/generate_metrics/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-apm
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-apm
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-apm";

const configuration = createConfiguration();
const apiInstance = new v2.APMApi(configuration);
const params = {/* parameters */};

apiInstance.getServiceList(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
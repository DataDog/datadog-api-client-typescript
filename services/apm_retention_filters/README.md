# @datadog/datadog-api-client-apm-retention-filters

## Description

Manage configuration of [APM retention filters](https://app.datadoghq.com/apm/traces/retention-filters) for your organization. You need an API and application key with Admin rights to interact with this endpoint. See [retention filters](https://docs.datadoghq.com/tracing/trace_pipeline/trace_retention/#retention-filters) on the Trace Retention page for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-apm-retention-filters
# Yarn
yarn add @datadog/datadog-api-client-apm-retention-filters
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { APMRetentionFiltersApiV2 } from "@datadog/datadog-api-client-apm-retention-filters";
import { v2 } from "@datadog/datadog-api-client-apm-retention-filters";

const configuration = createConfiguration();
const apiInstance = new APMRetentionFiltersApiV2(configuration);

apiInstance.listApmRetentionFilters().then((data: v2.RetentionFiltersResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
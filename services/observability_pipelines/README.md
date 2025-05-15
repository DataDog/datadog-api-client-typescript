# @datadog/datadog-api-client-observability-pipelines

## Description

Observability Pipelines allows you to collect and process logs within your own infrastructure, and then route them to downstream integrations.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-observability-pipelines
# Yarn
yarn add @datadog/datadog-api-client-observability-pipelines
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ObservabilityPipelinesApiV2 } from "@datadog/datadog-api-client-observability-pipelines";
import { v2 } from "@datadog/datadog-api-client-observability-pipelines";

const configuration = createConfiguration();
// Enable unstable operations
configuration.unstableOperations["v2.listPipelines"] = true;
const apiInstance = new ObservabilityPipelinesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listPipelines(params).then((data: v2.ListPipelinesResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
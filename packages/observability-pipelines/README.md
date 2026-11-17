# Observability Pipelines

`@datadog/datadog-api-client-observability-pipelines`

## Description

Observability Pipelines configurations.

Products: Observability Pipelines

Observability Pipelines allows you to collect and process logs within your own infrastructure, and then route them to downstream integrations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-observability-pipelines
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-observability-pipelines
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-observability-pipelines";

const configuration = createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);
const params = {/* parameters */};

apiInstance.listPipelines(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-llm-observability

## Description

Manage LLM Observability projects, datasets, dataset records, and experiments via the Experiments API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-llm-observability
# Yarn
yarn add @datadog/datadog-api-client-llm-observability
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LLMObservabilityApiV2 } from "@datadog/datadog-api-client-llm-observability";
import { v2 } from "@datadog/datadog-api-client-llm-observability";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "LLMObservabilityApi.v2.listLLMObsExperiments": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new LLMObservabilityApiV2(configuration);
const params = {/* parameters */};

apiInstance.listLLMObsExperiments(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
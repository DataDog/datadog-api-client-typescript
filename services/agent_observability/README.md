# @datadog/datadog-api-client-agent-observability

## Description

Manage Agent Observability spans, data, projects, datasets, dataset records, experiments, prompts, and annotations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-agent-observability
# Yarn
yarn add @datadog/datadog-api-client-agent-observability
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AgentObservabilityApiV2 } from "@datadog/datadog-api-client-agent-observability";
import { v2 } from "@datadog/datadog-api-client-agent-observability";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "AgentObservabilityApi.v2.listLLMObsCustomEvalConfigs": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new AgentObservabilityApiV2(configuration);

apiInstance.listLLMObsCustomEvalConfigs().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
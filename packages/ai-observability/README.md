# Agent Observability

`@datadog/datadog-api-client-ai-observability`

## Description

LLM and agent observability and Model Lab experiment tracking.

Products: AI Observability

Manage Agent Observability spans, data, projects, datasets, dataset records, experiments, prompts, and annotations.

Manage Model Lab projects, runs, artifacts, and facets for ML experiment tracking.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-ai-observability
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-ai-observability
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-ai-observability";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listLLMObsCustomEvalConfigs"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

apiInstance.listLLMObsCustomEvalConfigs().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
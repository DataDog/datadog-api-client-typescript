# AI Guard

`@datadog/datadog-api-client-ai-guard`

## Description

Evaluation of LLM interactions for prompt injection, jailbreaks and other threats.

Products: AI Guard

Evaluate LLM interactions for security threats such as prompt injection and jailbreak attempts.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-ai-guard
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-ai-guard
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-ai-guard";

const configuration = createConfiguration();
configuration.unstableOperations["v2.evaluateAIGuardRequest"] = true;
const apiInstance = new v2.AIGuardApi(configuration);
const params = {/* parameters */};

apiInstance.evaluateAIGuardRequest(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
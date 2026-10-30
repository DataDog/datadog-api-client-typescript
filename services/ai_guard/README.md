# @datadog/datadog-api-client-ai-guard

## Description

Evaluate LLM interactions for security threats such as prompt injection and jailbreak attempts.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ai-guard
# Yarn
yarn add @datadog/datadog-api-client-ai-guard
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AIGuardApiV2 } from "@datadog/datadog-api-client-ai-guard";
import { v2 } from "@datadog/datadog-api-client-ai-guard";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "AIGuardApi.v2.evaluateAIGuardRequest": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new AIGuardApiV2(configuration);
const params = {/* parameters */};

apiInstance.evaluateAIGuardRequest(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-open-ai-llm-evaluations-integration

## Description

Manage your Datadog OpenAI LLM Evaluations integration accounts and account resources
directly through the Datadog API. See the
[OpenAI integration page](https://docs.datadoghq.com/integrations/openai/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-open-ai-llm-evaluations-integration
# Yarn
yarn add @datadog/datadog-api-client-open-ai-llm-evaluations-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OpenAILLMEvaluationsIntegrationApiV2 } from "@datadog/datadog-api-client-open-ai-llm-evaluations-integration";
import { v2 } from "@datadog/datadog-api-client-open-ai-llm-evaluations-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OpenAILLMEvaluationsIntegrationApi.v2.listOpenAILLMEvaluationsIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OpenAILLMEvaluationsIntegrationApiV2(configuration);

apiInstance.listOpenAILLMEvaluationsIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
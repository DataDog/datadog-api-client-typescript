# @datadog/datadog-api-client-open-ai-codex-integration

## Description

Manage your Datadog OpenAI Codex integration accounts and account resources
directly through the Datadog API. See the
[OpenAI Codex integration page](https://docs.datadoghq.com/integrations/openai-codex/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-open-ai-codex-integration
# Yarn
yarn add @datadog/datadog-api-client-open-ai-codex-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OpenAICodexIntegrationApiV2 } from "@datadog/datadog-api-client-open-ai-codex-integration";
import { v2 } from "@datadog/datadog-api-client-open-ai-codex-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OpenAICodexIntegrationApi.v2.listOpenAICodexIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OpenAICodexIntegrationApiV2(configuration);

apiInstance.listOpenAICodexIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
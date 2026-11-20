# @datadog/datadog-api-client-open-ai-usage-and-costs-integration

## Description

Manage your Datadog OpenAI Usage and Costs integration accounts and account resources
directly through the Datadog API. See the
[OpenAI integration page](https://docs.datadoghq.com/integrations/openai/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-open-ai-usage-and-costs-integration
# Yarn
yarn add @datadog/datadog-api-client-open-ai-usage-and-costs-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OpenAIUsageAndCostsIntegrationApiV2 } from "@datadog/datadog-api-client-open-ai-usage-and-costs-integration";
import { v2 } from "@datadog/datadog-api-client-open-ai-usage-and-costs-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OpenAIUsageAndCostsIntegrationApi.v2.listOpenAIUsageAndCostsIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OpenAIUsageAndCostsIntegrationApiV2(configuration);

apiInstance.listOpenAIUsageAndCostsIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
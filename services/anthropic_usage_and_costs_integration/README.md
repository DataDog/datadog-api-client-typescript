# @datadog/datadog-api-client-anthropic-usage-and-costs-integration

## Description

Manage your Datadog Anthropic Usage and Costs integration accounts and account resources
directly through the Datadog API. See the
[Anthropic Usage and Costs integration page](https://docs.datadoghq.com/integrations/anthropic-usage-and-costs/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-anthropic-usage-and-costs-integration
# Yarn
yarn add @datadog/datadog-api-client-anthropic-usage-and-costs-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AnthropicUsageAndCostsIntegrationApiV2 } from "@datadog/datadog-api-client-anthropic-usage-and-costs-integration";
import { v2 } from "@datadog/datadog-api-client-anthropic-usage-and-costs-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "AnthropicUsageAndCostsIntegrationApi.v2.listAnthropicUsageAndCostsIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new AnthropicUsageAndCostsIntegrationApiV2(configuration);

apiInstance.listAnthropicUsageAndCostsIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-ai-gateway

## Description

AI Gateway routes your applications' LLM requests to the model providers you connect, and
applies your organization's routing, access, spending, rate limit, and data capture rules.

These endpoints allow you to configure:

- Providers: the model providers your organization connects, and the models and pricing each offers.
- Routing rules: the named routes your applications call, and the models that serve each one.
- Access: inbound routing policies and model groups that decide who can use which models.
- Budgets and rate limits: spending caps and request limits, and their current usage.
- Data capture and governance: what request data is recorded, and organization-wide controls.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ai-gateway
# Yarn
yarn add @datadog/datadog-api-client-ai-gateway
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AIGatewayApiV2 } from "@datadog/datadog-api-client-ai-gateway";
import { v2 } from "@datadog/datadog-api-client-ai-gateway";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "AIGatewayApi.v2.listAiGatewayBudgets": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new AIGatewayApiV2(configuration);

apiInstance.listAiGatewayBudgets().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
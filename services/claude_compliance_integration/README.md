# @datadog/datadog-api-client-claude-compliance-integration

## Description

Manage your Datadog Claude Compliance integration accounts and account resources
directly through the Datadog API. See the
[Claude Compliance integration page](https://docs.datadoghq.com/integrations/anthropic-compliance-logs/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-claude-compliance-integration
# Yarn
yarn add @datadog/datadog-api-client-claude-compliance-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ClaudeComplianceIntegrationApiV2 } from "@datadog/datadog-api-client-claude-compliance-integration";
import { v2 } from "@datadog/datadog-api-client-claude-compliance-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ClaudeComplianceIntegrationApi.v2.listClaudeComplianceIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ClaudeComplianceIntegrationApiV2(configuration);

apiInstance.listClaudeComplianceIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
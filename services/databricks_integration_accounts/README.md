# @datadog/datadog-api-client-databricks-integration-accounts

## Description

Manage your Datadog Databricks integration accounts directly through the Datadog API.
Create, update, and delete accounts, configure authentication and settings, and
enable or disable dataflows such as Data Jobs Monitoring, serverless jobs,
cluster logs, GPU metrics, cloud cost metrics, data observability, and model serving
metrics. See the
[Databricks integration page](https://docs.datadoghq.com/integrations/databricks/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-databricks-integration-accounts
# Yarn
yarn add @datadog/datadog-api-client-databricks-integration-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DatabricksIntegrationAccountsApiV2 } from "@datadog/datadog-api-client-databricks-integration-accounts";
import { v2 } from "@datadog/datadog-api-client-databricks-integration-accounts";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DatabricksIntegrationAccountsApi.v2.listDatabricksIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DatabricksIntegrationAccountsApiV2(configuration);

apiInstance.listDatabricksIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-databricks-integration

## Description

Manage your Datadog Databricks integration accounts and account resources directly
through the Datadog API. See the
[Databricks integration page](https://docs.datadoghq.com/integrations/databricks/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-databricks-integration
# Yarn
yarn add @datadog/datadog-api-client-databricks-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DatabricksIntegrationApiV2 } from "@datadog/datadog-api-client-databricks-integration";
import { v2 } from "@datadog/datadog-api-client-databricks-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DatabricksIntegrationApi.v2.listDatabricksIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DatabricksIntegrationApiV2(configuration);

apiInstance.listDatabricksIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
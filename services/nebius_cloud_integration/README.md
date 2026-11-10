# @datadog/datadog-api-client-nebius-cloud-integration

## Description

Manage your Datadog Nebius Cloud integration accounts and account resources
directly through the Datadog API. See the
[Nebius Cloud integration page](https://docs.datadoghq.com/integrations/nebius_cloud/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-nebius-cloud-integration
# Yarn
yarn add @datadog/datadog-api-client-nebius-cloud-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { NebiusCloudIntegrationApiV2 } from "@datadog/datadog-api-client-nebius-cloud-integration";
import { v2 } from "@datadog/datadog-api-client-nebius-cloud-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "NebiusCloudIntegrationApi.v2.listNebiusCloudIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new NebiusCloudIntegrationApiV2(configuration);

apiInstance.listNebiusCloudIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-azure-integration

## Description

Configure your Datadog-Azure integration directly through the Datadog API.
For more information, see the [Datadog-Azure integration page](https://docs.datadoghq.com/integrations/azure).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-azure-integration
# Yarn
yarn add @datadog/datadog-api-client-azure-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AzureIntegrationApiV1 } from "@datadog/datadog-api-client-azure-integration";
import { v1 } from "@datadog/datadog-api-client-azure-integration";

const configuration = createConfiguration();
const apiInstance = new AzureIntegrationApiV1(configuration);

apiInstance.listAzureIntegration().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
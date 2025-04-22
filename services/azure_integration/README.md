# @datadog/datadog-api-client-azure-integration

## Description

Configure your Datadog-Azure integration directly through the Datadog API.
For more information, see the [Datadog-Azure integration page](https://docs.datadoghq.com/integrations/azure).

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

const configuration = createConfiguration();
const apiInstance = new AzureIntegrationApiV1(configuration);

const result = await apiInstance.listAzureIntegration(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
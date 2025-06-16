# @datadog/datadog-api-client-opsgenie-integration

## Description

Configure your [Datadog Opsgenie integration](https://docs.datadoghq.com/integrations/opsgenie/)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-opsgenie-integration
# Yarn
yarn add @datadog/datadog-api-client-opsgenie-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OpsgenieIntegrationApiV2 } from "@datadog/datadog-api-client-opsgenie-integration";
import { v2 } from "@datadog/datadog-api-client-opsgenie-integration";

const configuration = createConfiguration();
const apiInstance = new OpsgenieIntegrationApiV2(configuration);

apiInstance.listOpsgenieServices().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
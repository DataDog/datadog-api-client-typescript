# @datadog/datadog-api-client-fastly-integration

## Description

Manage your Datadog Fastly integration accounts and services directly through the Datadog API. See the [Fastly integration page](https://docs.datadoghq.com/integrations/fastly/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-fastly-integration
# Yarn
yarn add @datadog/datadog-api-client-fastly-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { FastlyIntegrationApiV2 } from "@datadog/datadog-api-client-fastly-integration";
import { v2 } from "@datadog/datadog-api-client-fastly-integration";

const configuration = createConfiguration();
const apiInstance = new FastlyIntegrationApiV2(configuration);

apiInstance.listFastlyAccounts().then((data: v2.FastlyAccountsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
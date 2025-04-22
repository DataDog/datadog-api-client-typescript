# @datadog/datadog-api-client-webhooks-integration

## Description

Configure your Datadog-Webhooks integration directly through the Datadog API.
See the [Webhooks integration page](https://docs.datadoghq.com/integrations/webhooks) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-webhooks-integration
# Yarn
yarn add @datadog/datadog-api-client-webhooks-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { WebhooksIntegrationApiV1 } from "@datadog/datadog-api-client-webhooks-integration";
import { v1 } from "@datadog/datadog-api-client-webhooks-integration";

const configuration = createConfiguration();
const apiInstance = new WebhooksIntegrationApiV1(configuration);
const params = {/* parameters */};

apiInstance.createWebhooksIntegrationCustomVariable(params).then((data: v1.WebhooksIntegrationCustomVariableResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
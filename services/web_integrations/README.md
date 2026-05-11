# @datadog/datadog-api-client-web-integrations

## Description

Manage web integration accounts programmatically through the Datadog API.
See the [Web Integrations page](https://app.datadoghq.com/integrations) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-web-integrations
# Yarn
yarn add @datadog/datadog-api-client-web-integrations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { WebIntegrationsApiV2 } from "@datadog/datadog-api-client-web-integrations";
import { v2 } from "@datadog/datadog-api-client-web-integrations";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "WebIntegrationsApi.v2.listWebIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new WebIntegrationsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listWebIntegrationAccounts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
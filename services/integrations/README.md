# @datadog/datadog-api-client-integrations

## Description

The Integrations API is used to list available integrations
and retrieve information about their installation status.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-integrations
# Yarn
yarn add @datadog/datadog-api-client-integrations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IntegrationsApiV2 } from "@datadog/datadog-api-client-integrations";
import { v2 } from "@datadog/datadog-api-client-integrations";

const configuration = createConfiguration();
const apiInstance = new IntegrationsApiV2(configuration);

apiInstance.listIntegrations().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
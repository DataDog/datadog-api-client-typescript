# @datadog/datadog-api-client-statuspage-integration

## Description

Configure your [Datadog Statuspage integration](https://docs.datadoghq.com/integrations/statuspage/)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-statuspage-integration
# Yarn
yarn add @datadog/datadog-api-client-statuspage-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { StatuspageIntegrationApiV2 } from "@datadog/datadog-api-client-statuspage-integration";
import { v2 } from "@datadog/datadog-api-client-statuspage-integration";

const configuration = createConfiguration();
const apiInstance = new StatuspageIntegrationApiV2(configuration);

apiInstance.getStatuspageAccount().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
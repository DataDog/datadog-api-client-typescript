# @datadog/datadog-api-client-rum-operations

## Description

Manage [RUM Operations](https://docs.datadoghq.com/real_user_monitoring/), business
transactions detected from RUM events through a configurable journey, and their strong links
to features. See the [RUM & Session Replay page](https://docs.datadoghq.com/real_user_monitoring/)
for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-operations
# Yarn
yarn add @datadog/datadog-api-client-rum-operations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMOperationsApiV2 } from "@datadog/datadog-api-client-rum-operations";
import { v2 } from "@datadog/datadog-api-client-rum-operations";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RUMOperationsApi.v2.createRUMOperation": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RUMOperationsApiV2(configuration);
const params = {/* parameters */};

apiInstance.createRUMOperation(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
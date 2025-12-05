# @datadog/datadog-api-client-funnel

## Description

API for funnel.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-funnel
# Yarn
yarn add @datadog/datadog-api-client-funnel
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { FunnelApiV2 } from "@datadog/datadog-api-client-funnel";
import { v2 } from "@datadog/datadog-api-client-funnel";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "FunnelApi.v2.getRumFunnel": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new FunnelApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumFunnel(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
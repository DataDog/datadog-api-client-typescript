# @datadog/datadog-api-client-user-flow

## Description

API for user flow.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-user-flow
# Yarn
yarn add @datadog/datadog-api-client-user-flow
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { UserFlowApiV2 } from "@datadog/datadog-api-client-user-flow";
import { v2 } from "@datadog/datadog-api-client-user-flow";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "UserFlowApi.v2.getRumSankey": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new UserFlowApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumSankey(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
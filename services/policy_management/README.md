# @datadog/datadog-api-client-policy-management

## Description

Manage and evaluate organizational policies.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-policy-management
# Yarn
yarn add @datadog/datadog-api-client-policy-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { PolicyManagementApiV2 } from "@datadog/datadog-api-client-policy-management";
import { v2 } from "@datadog/datadog-api-client-policy-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "PolicyManagementApi.v2.evaluatePolicyResult": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new PolicyManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.evaluatePolicyResult(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
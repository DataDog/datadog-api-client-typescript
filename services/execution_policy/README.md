# @datadog/datadog-api-client-execution-policy

## Description

Execution policies control which actions Datadog Action Platform is allowed to run
against your infrastructure, and where. Each policy pairs an effect (allow or deny)
with a pattern of actions, and can scope that decision to specific Kubernetes
namespaces, scripts, or remote shell paths.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-execution-policy
# Yarn
yarn add @datadog/datadog-api-client-execution-policy
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ExecutionPolicyApiV2 } from "@datadog/datadog-api-client-execution-policy";
import { v2 } from "@datadog/datadog-api-client-execution-policy";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ExecutionPolicyApi.v2.listExecutionPolicies": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ExecutionPolicyApiV2(configuration);
const params = {/* parameters */};

apiInstance.listExecutionPolicies(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
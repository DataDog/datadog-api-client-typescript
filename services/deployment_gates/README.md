# @datadog/datadog-api-client-deployment-gates

## Description

Manage Deployment Gates using this API to reduce the likelihood and impact of incidents caused by deployments. See the [Deployment Gates documentation](https://docs.datadoghq.com/deployment_gates/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-deployment-gates
# Yarn
yarn add @datadog/datadog-api-client-deployment-gates
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DeploymentGatesApiV2 } from "@datadog/datadog-api-client-deployment-gates";
import { v2 } from "@datadog/datadog-api-client-deployment-gates";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DeploymentGatesApi.v2.createDeploymentGate": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DeploymentGatesApiV2(configuration);
const params = {/* parameters */};

apiInstance.createDeploymentGate(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
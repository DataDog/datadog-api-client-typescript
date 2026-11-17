# Deployment Gates

`@datadog/datadog-api-client-deployment-gates`

## Description

Deployment gates and their rules and evaluations.

Products: Deployment Gates

Manage Deployment Gates using this API to reduce the likelihood and impact of incidents caused by deployments. See the [Deployment Gates documentation](https://docs.datadoghq.com/deployment_gates/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-deployment-gates
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-deployment-gates
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-deployment-gates";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listDeploymentGates"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);
const params = {/* parameters */};

apiInstance.listDeploymentGates(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
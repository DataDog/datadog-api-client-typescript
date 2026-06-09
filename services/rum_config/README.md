# @datadog/datadog-api-client-rum-config

## Description

Manage the [Real User Monitoring (RUM)](https://docs.datadoghq.com/real_user_monitoring/) configuration for your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-config
# Yarn
yarn add @datadog/datadog-api-client-rum-config
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumConfigApiV2 } from "@datadog/datadog-api-client-rum-config";
import { v2 } from "@datadog/datadog-api-client-rum-config";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RumConfigApi.v2.getRumConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RumConfigApiV2(configuration);

apiInstance.getRumConfig().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
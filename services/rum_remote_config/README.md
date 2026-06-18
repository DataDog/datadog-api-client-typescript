# @datadog/datadog-api-client-rum-remote-config

## Description

Manage [RUM SDK configurations](https://docs.datadoghq.com/real_user_monitoring/) delivered to RUM applications via Remote Configuration.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-remote-config
# Yarn
yarn add @datadog/datadog-api-client-rum-remote-config
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMRemoteConfigApiV2 } from "@datadog/datadog-api-client-rum-remote-config";
import { v2 } from "@datadog/datadog-api-client-rum-remote-config";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RUMRemoteConfigApi.v2.getRumSdkConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RUMRemoteConfigApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumSdkConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
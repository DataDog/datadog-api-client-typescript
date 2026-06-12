# @datadog/datadog-api-client-dashboard-sharing

## Description

Manage dashboard sharing configurations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dashboard-sharing
# Yarn
yarn add @datadog/datadog-api-client-dashboard-sharing
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DashboardSharingApiV2 } from "@datadog/datadog-api-client-dashboard-sharing";
import { v2 } from "@datadog/datadog-api-client-dashboard-sharing";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DashboardSharingApi.v2.listSharedDashboardsByDashboardId": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DashboardSharingApiV2(configuration);
const params = {/* parameters */};

apiInstance.listSharedDashboardsByDashboardId(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-dashboards

## Description

Interact with your dashboards through the API to search and retrieve dashboards.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dashboards
# Yarn
yarn add @datadog/datadog-api-client-dashboards
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DashboardsApiV2 } from "@datadog/datadog-api-client-dashboards";
import { v2 } from "@datadog/datadog-api-client-dashboards";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DashboardsApi.v2.searchDashboards": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DashboardsApiV2(configuration);
const params = {/* parameters */};

apiInstance.searchDashboards(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-dashboards

## Description

Manage all your dashboards, as well as access to your shared dashboards, through the API. See the [Dashboards page](https://docs.datadoghq.com/dashboards/) for more information.

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
import { DashboardsApiV1 } from "@datadog/datadog-api-client-dashboards";
import { v1 } from "@datadog/datadog-api-client-dashboards";

const configuration = createConfiguration();
const apiInstance = new DashboardsApiV1(configuration);
const params = {/* parameters */};

apiInstance.listDashboards(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
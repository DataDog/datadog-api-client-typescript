# @datadog/datadog-api-client-dashboard-lists

## Description

Interact with your dashboard lists through the API to
organize, find, and share all of your dashboards with your team and
organization.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dashboard-lists
# Yarn
yarn add @datadog/datadog-api-client-dashboard-lists
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DashboardListsApiV2 } from "@datadog/datadog-api-client-dashboard-lists";
import { v2 } from "@datadog/datadog-api-client-dashboard-lists";

const configuration = createConfiguration();
const apiInstance = new DashboardListsApiV2(configuration);
const params = {/* parameters */};

apiInstance.getDashboardListItems(params).then((data: v2.DashboardListItems) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
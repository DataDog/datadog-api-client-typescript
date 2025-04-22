# @datadog/datadog-api-client-rum

## Description

Manage your Real User Monitoring (RUM) applications, and search or aggregate your RUM events over HTTP. See the [RUM & Session Replay page](https://docs.datadoghq.com/real_user_monitoring/) for more information

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum
# Yarn
yarn add @datadog/datadog-api-client-rum
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMApiV2 } from "@datadog/datadog-api-client-rum";
import { v2 } from "@datadog/datadog-api-client-rum";

const configuration = createConfiguration();
const apiInstance = new RUMApiV2(configuration);
const params = {/* parameters */};

apiInstance.aggregateRUMEvents(params).then((data: v2.RUMAnalyticsAggregateResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-rum-insights

## Description

Get insights into the performance of your Real User Monitoring (RUM) applications over HTTP. See the [RUM & Session Replay page](https://docs.datadoghq.com/real_user_monitoring/) for more information

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-insights
# Yarn
yarn add @datadog/datadog-api-client-rum-insights
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMInsightsApiV2 } from "@datadog/datadog-api-client-rum-insights";
import { v2 } from "@datadog/datadog-api-client-rum-insights";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RUMInsightsApi.v2.queryAggregatedLongTasks": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RUMInsightsApiV2(configuration);
const params = {/* parameters */};

apiInstance.queryAggregatedLongTasks(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
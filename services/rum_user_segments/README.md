# @datadog/datadog-api-client-rum-user-segments

## Description

Manage RUM user segments for audience targeting and analysis.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-user-segments
# Yarn
yarn add @datadog/datadog-api-client-rum-user-segments
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMUserSegmentsApiV2 } from "@datadog/datadog-api-client-rum-user-segments";
import { v2 } from "@datadog/datadog-api-client-rum-user-segments";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RUMUserSegmentsApi.v2.listRumSegments": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RUMUserSegmentsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listRumSegments(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
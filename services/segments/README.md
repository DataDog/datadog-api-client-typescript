# @datadog/datadog-api-client-segments

## Description

API for segments.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-segments
# Yarn
yarn add @datadog/datadog-api-client-segments
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SegmentsApiV2 } from "@datadog/datadog-api-client-segments";
import { v2 } from "@datadog/datadog-api-client-segments";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "SegmentsApi.v2.listRumSegments": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new SegmentsApiV2(configuration);

apiInstance.listRumSegments().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-apm-trace

## Description

Retrieve full or pruned APM traces by trace ID.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-apm-trace
# Yarn
yarn add @datadog/datadog-api-client-apm-trace
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { APMTraceApiV2 } from "@datadog/datadog-api-client-apm-trace";
import { v2 } from "@datadog/datadog-api-client-apm-trace";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "APMTraceApi.v2.getPrunedTraceByID": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new APMTraceApiV2(configuration);
const params = {/* parameters */};

apiInstance.getPrunedTraceByID(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
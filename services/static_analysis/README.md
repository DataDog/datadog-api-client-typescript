# @datadog/datadog-api-client-static-analysis

## Description

API for static analysis

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-static-analysis
# Yarn
yarn add @datadog/datadog-api-client-static-analysis
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { StaticAnalysisApiV2 } from "@datadog/datadog-api-client-static-analysis";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "StaticAnalysisApi.v2.createSCAResult": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new StaticAnalysisApiV2(configuration);
const params = {/* parameters */};

apiInstance.createSCAResult(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
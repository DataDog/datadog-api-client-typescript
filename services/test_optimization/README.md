# @datadog/datadog-api-client-test-optimization

## Description

Search and manage flaky tests through Test Optimization. See the [Test Optimization page](https://docs.datadoghq.com/tests/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-test-optimization
# Yarn
yarn add @datadog/datadog-api-client-test-optimization
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TestOptimizationApiV2 } from "@datadog/datadog-api-client-test-optimization";
import { v2 } from "@datadog/datadog-api-client-test-optimization";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TestOptimizationApi.v2.searchFlakyTests": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TestOptimizationApiV2(configuration);
const params = {/* parameters */};

apiInstance.searchFlakyTests(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
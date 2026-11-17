# Test Optimization

`@datadog/datadog-api-client-test-optimization`

## Description

Test events, Test Optimization settings and code coverage summaries.

Products: Test Optimization

Search or aggregate your CI Visibility test events over HTTP. See the [Test Visibility in Datadog page](https://docs.datadoghq.com/tests/) for more information.

Retrieve and analyze code coverage data from Code Coverage. See the [Code Coverage page](https://docs.datadoghq.com/code_coverage/) for more information.

Search and manage flaky tests through Test Optimization. See the [Test Optimization page](https://docs.datadoghq.com/tests/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-test-optimization
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-test-optimization
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-test-optimization";

const configuration = createConfiguration();
const apiInstance = new v2.CIVisibilityTestsApi(configuration);
const params = {/* parameters */};

apiInstance.aggregateCIAppTestEvents(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
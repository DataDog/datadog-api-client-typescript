# @datadog/datadog-api-client-test-examples

## Description

Manage test example resources.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-test-examples
# Yarn
yarn add @datadog/datadog-api-client-test-examples
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TestExamplesApiV2 } from "@datadog/datadog-api-client-test-examples";
import { v2 } from "@datadog/datadog-api-client-test-examples";

const configuration = createConfiguration();
const apiInstance = new TestExamplesApiV2(configuration);

apiInstance.listTestExamples().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
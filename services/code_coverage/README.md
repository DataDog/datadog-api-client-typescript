# @datadog/datadog-api-client-code-coverage

## Description

Retrieve and analyze code coverage data from Code Coverage. See the [Code Coverage page](https://docs.datadoghq.com/code_coverage/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-code-coverage
# Yarn
yarn add @datadog/datadog-api-client-code-coverage
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CodeCoverageApiV2 } from "@datadog/datadog-api-client-code-coverage";
import { v2 } from "@datadog/datadog-api-client-code-coverage";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CodeCoverageApi.v2.getCodeCoverageBranchSummary": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CodeCoverageApiV2(configuration);
const params = {/* parameters */};

apiInstance.getCodeCoverageBranchSummary(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
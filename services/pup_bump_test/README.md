# @datadog/datadog-api-client-pup-bump-test

## Description

Temporary test-only tag used to exercise the pup dependency-bump
generation and merge pipeline. Not a real product feature.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-pup-bump-test
# Yarn
yarn add @datadog/datadog-api-client-pup-bump-test
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { PupBumpTestApiV2 } from "@datadog/datadog-api-client-pup-bump-test";
import { v2 } from "@datadog/datadog-api-client-pup-bump-test";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "PupBumpTestApi.v2.getPupBumpTest": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new PupBumpTestApiV2(configuration);

apiInstance.getPupBumpTest().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
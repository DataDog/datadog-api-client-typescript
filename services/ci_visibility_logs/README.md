# @datadog/datadog-api-client-ci-visibility-logs

## Description

Send CI job logs over HTTP for CI Visibility.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ci-visibility-logs
# Yarn
yarn add @datadog/datadog-api-client-ci-visibility-logs
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CIVisibilityLogsApiV2 } from "@datadog/datadog-api-client-ci-visibility-logs";
import { v2 } from "@datadog/datadog-api-client-ci-visibility-logs";

const configuration = createConfiguration();
const apiInstance = new CIVisibilityLogsApiV2(configuration);
const params = {/* parameters */};

apiInstance.submitCILog(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
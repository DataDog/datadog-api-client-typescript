# @datadog/datadog-api-client-error-tracking

## Description

View and manage issues within Error Tracking. See the [Error Tracking page](https://docs.datadoghq.com/error_tracking/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-error-tracking
# Yarn
yarn add @datadog/datadog-api-client-error-tracking
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ErrorTrackingApiV2 } from "@datadog/datadog-api-client-error-tracking";
import { v2 } from "@datadog/datadog-api-client-error-tracking";

const configuration = createConfiguration();
const apiInstance = new ErrorTrackingApiV2(configuration);
const params = {/* parameters */};

apiInstance.searchIssues(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
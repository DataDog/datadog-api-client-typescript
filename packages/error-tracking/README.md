# Error Tracking

`@datadog/datadog-api-client-error-tracking`

## Description

Error Tracking issues.

Products: Error Tracking

View and manage issues within Error Tracking. See the [Error Tracking page](https://docs.datadoghq.com/error_tracking/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-error-tracking
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-error-tracking
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-error-tracking";

const configuration = createConfiguration();
const apiInstance = new v2.ErrorTrackingApi(configuration);
const params = {/* parameters */};

apiInstance.searchIssues(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
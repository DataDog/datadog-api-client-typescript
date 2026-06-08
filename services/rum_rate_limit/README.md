# @datadog/datadog-api-client-rum-rate-limit

## Description

Manage RUM rate limit configurations for your organization's RUM applications.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-rate-limit
# Yarn
yarn add @datadog/datadog-api-client-rum-rate-limit
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumRateLimitApiV2 } from "@datadog/datadog-api-client-rum-rate-limit";
import { v2 } from "@datadog/datadog-api-client-rum-rate-limit";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RumRateLimitApi.v2.getRumRateLimitConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RumRateLimitApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumRateLimitConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
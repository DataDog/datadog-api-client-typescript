# @datadog/datadog-api-client-rum-replay

## Description

Generate and retrieve AI-powered summaries of RUM replay sessions.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-replay
# Yarn
yarn add @datadog/datadog-api-client-rum-replay
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumReplayApiV2 } from "@datadog/datadog-api-client-rum-replay";
import { v2 } from "@datadog/datadog-api-client-rum-replay";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RumReplayApi.v2.generateReplaySummary": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RumReplayApiV2(configuration);
const params = {/* parameters */};

apiInstance.generateReplaySummary(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
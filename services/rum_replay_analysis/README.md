# @datadog/datadog-api-client-rum-replay-analysis

## Description

Analyze RUM replay sessions to identify and investigate user-facing issues. Retrieve issues detected by AI analysis, get details for individual issues, and explore the sessions associated with each issue.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-replay-analysis
# Yarn
yarn add @datadog/datadog-api-client-rum-replay-analysis
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumReplayAnalysisApiV2 } from "@datadog/datadog-api-client-rum-replay-analysis";
import { v2 } from "@datadog/datadog-api-client-rum-replay-analysis";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RumReplayAnalysisApi.v2.listReplayAnalysisIssues": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RumReplayAnalysisApiV2(configuration);
const params = {/* parameters */};

apiInstance.listReplayAnalysisIssues(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
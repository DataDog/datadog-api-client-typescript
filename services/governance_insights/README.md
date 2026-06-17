# @datadog/datadog-api-client-governance-insights

## Description

Governance Insights surface key usage, configuration, and best-practice signals for an
organization within the Governance Console. Each insight reports a current value (and,
optionally, a previous value for comparison) along with the query used to compute it, so
that the Console can render trends and highlight areas that need attention.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-governance-insights
# Yarn
yarn add @datadog/datadog-api-client-governance-insights
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GovernanceInsightsApiV2 } from "@datadog/datadog-api-client-governance-insights";
import { v2 } from "@datadog/datadog-api-client-governance-insights";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "GovernanceInsightsApi.v2.listGovernanceInsights": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new GovernanceInsightsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listGovernanceInsights(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
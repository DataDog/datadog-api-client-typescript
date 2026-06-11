# @datadog/datadog-api-client-network-health-insights

## Description

Analyze network health by surfacing actionable insights for services experiencing connectivity issues.
Insights are derived from DNS failure data (timeouts, NXDOMAIN, SERVFAIL, general failures),
TLS certificate health (expired, expiring soon), and security group denials.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-network-health-insights
# Yarn
yarn add @datadog/datadog-api-client-network-health-insights
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { NetworkHealthInsightsApiV2 } from "@datadog/datadog-api-client-network-health-insights";
import { v2 } from "@datadog/datadog-api-client-network-health-insights";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "NetworkHealthInsightsApi.v2.listNetworkHealthInsights": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new NetworkHealthInsightsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listNetworkHealthInsights(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
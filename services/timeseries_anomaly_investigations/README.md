# @datadog/datadog-api-client-timeseries-anomaly-investigations

## Description

Investigate metrics timeseries anomalies and return deterministic findings.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-timeseries-anomaly-investigations
# Yarn
yarn add @datadog/datadog-api-client-timeseries-anomaly-investigations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TimeseriesAnomalyInvestigationsApiV2 } from "@datadog/datadog-api-client-timeseries-anomaly-investigations";
import { v2 } from "@datadog/datadog-api-client-timeseries-anomaly-investigations";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TimeseriesAnomalyInvestigationsApi.v2.createTimeseriesAnomalyInvestigation": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TimeseriesAnomalyInvestigationsApiV2(configuration);
const params = {/* parameters */};

apiInstance.createTimeseriesAnomalyInvestigation(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
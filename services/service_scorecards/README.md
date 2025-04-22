# @datadog/datadog-api-client-service-scorecards

## Description

API to create and update scorecard rules and outcomes. See [Service Scorecards](https://docs.datadoghq.com/service_catalog/scorecards) for more information.

This feature is currently in BETA. If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-scorecards
# Yarn
yarn add @datadog/datadog-api-client-service-scorecards
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceScorecardsApiV2 } from "@datadog/datadog-api-client-service-scorecards";
import { v2 } from "@datadog/datadog-api-client-service-scorecards";

const configuration = createConfiguration();
// Enable unstable operations
configuration.unstableOperations["v2.listScorecardOutcomes"] = true;
const apiInstance = new ServiceScorecardsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listScorecardOutcomes(params).then((data: v2.OutcomesResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
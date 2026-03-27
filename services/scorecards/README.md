# @datadog/datadog-api-client-scorecards

## Description

API to create and update scorecard rules and outcomes. See [Scorecards](https://docs.datadoghq.com/service_catalog/scorecards) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-scorecards
# Yarn
yarn add @datadog/datadog-api-client-scorecards
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ScorecardsApiV2 } from "@datadog/datadog-api-client-scorecards";
import { v2 } from "@datadog/datadog-api-client-scorecards";

const configuration = createConfiguration();
const apiInstance = new ScorecardsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listScorecardCampaigns(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
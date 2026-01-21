# @datadog/datadog-api-client-entity-risk-scores

## Description

Retrieves security risk scores for entities in your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-entity-risk-scores
# Yarn
yarn add @datadog/datadog-api-client-entity-risk-scores
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { EntityRiskScoresApiV2 } from "@datadog/datadog-api-client-entity-risk-scores";
import { v2 } from "@datadog/datadog-api-client-entity-risk-scores";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "EntityRiskScoresApi.v2.listEntityRiskScores": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new EntityRiskScoresApiV2(configuration);
const params = {/* parameters */};

apiInstance.listEntityRiskScores(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
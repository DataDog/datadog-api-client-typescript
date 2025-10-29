# @datadog/datadog-api-client-cohort

## Description

API for Cohort.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-cohort
# Yarn
yarn add @datadog/datadog-api-client-cohort
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CohortApiV2 } from "@datadog/datadog-api-client-cohort";
import { v2 } from "@datadog/datadog-api-client-cohort";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CohortApi.v2.getRumCohort": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CohortApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumCohort(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
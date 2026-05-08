# @datadog/datadog-api-client-dataset-restrictions

## Description

Configure dataset-level access restrictions per Datadog product type. Dataset restrictions
control whether data is visible by default or hidden until explicitly granted, and how
ownership-based access is determined.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dataset-restrictions
# Yarn
yarn add @datadog/datadog-api-client-dataset-restrictions
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DatasetRestrictionsApiV2 } from "@datadog/datadog-api-client-dataset-restrictions";
import { v2 } from "@datadog/datadog-api-client-dataset-restrictions";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DatasetRestrictionsApi.v2.listDatasetRestrictions": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DatasetRestrictionsApiV2(configuration);

apiInstance.listDatasetRestrictions().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
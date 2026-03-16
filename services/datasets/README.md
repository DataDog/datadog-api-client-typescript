# @datadog/datadog-api-client-datasets

## Description

Data Access Controls in Datadog is a feature that allows administrators and access managers to regulate
access to sensitive data. By defining Restricted Datasets, you can ensure that only specific teams or roles can
view certain types of telemetry (for example, logs, traces, metrics, and RUM data).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-datasets
# Yarn
yarn add @datadog/datadog-api-client-datasets
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DatasetsApiV2 } from "@datadog/datadog-api-client-datasets";
import { v2 } from "@datadog/datadog-api-client-datasets";

const configuration = createConfiguration();
const apiInstance = new DatasetsApiV2(configuration);

apiInstance.getAllDatasets().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
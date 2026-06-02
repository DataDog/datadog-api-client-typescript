# @datadog/datadog-api-client-rum-retention-filters-hardcoded

## Description

Manage hardcoded retention filters through [Manage Applications](https://app.datadoghq.com/rum/list) in RUM.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-retention-filters-hardcoded
# Yarn
yarn add @datadog/datadog-api-client-rum-retention-filters-hardcoded
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMRetentionFiltersHardcodedApiV2 } from "@datadog/datadog-api-client-rum-retention-filters-hardcoded";
import { v2 } from "@datadog/datadog-api-client-rum-retention-filters-hardcoded";

const configuration = createConfiguration();
const apiInstance = new RUMRetentionFiltersHardcodedApiV2(configuration);
const params = {/* parameters */};

apiInstance.listHardcodedRetentionFilters(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
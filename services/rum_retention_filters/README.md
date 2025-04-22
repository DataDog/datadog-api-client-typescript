# @datadog/datadog-api-client-rum-retention-filters

## Description

Manage retention filters through [Manage Applications](https://app.datadoghq.com/rum/list) of RUM for your organization.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-retention-filters
# Yarn
yarn add @datadog/datadog-api-client-rum-retention-filters
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumRetentionFiltersApiV2 } from "@datadog/datadog-api-client-rum-retention-filters";
import { v2 } from "@datadog/datadog-api-client-rum-retention-filters";

const configuration = createConfiguration();
const apiInstance = new RumRetentionFiltersApiV2(configuration);
const params = {/* parameters */};

apiInstance.orderRetentionFilters(params).then((data: v2.RumRetentionFiltersOrderResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
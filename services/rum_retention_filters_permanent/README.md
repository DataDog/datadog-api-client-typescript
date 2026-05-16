# @datadog/datadog-api-client-rum-retention-filters-permanent

## Description

Manage permanent retention filters through [Manage Applications](https://app.datadoghq.com/rum/list) in RUM for your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-retention-filters-permanent
# Yarn
yarn add @datadog/datadog-api-client-rum-retention-filters-permanent
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumRetentionFiltersPermanentApiV2 } from "@datadog/datadog-api-client-rum-retention-filters-permanent";
import { v2 } from "@datadog/datadog-api-client-rum-retention-filters-permanent";

const configuration = createConfiguration();
const apiInstance = new RumRetentionFiltersPermanentApiV2(configuration);
const params = {/* parameters */};

apiInstance.listPermanentRetentionFilters(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-rum-retention-quotas

## Description

Manage RUM retention quota configurations for your organization's RUM applications.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-retention-quotas
# Yarn
yarn add @datadog/datadog-api-client-rum-retention-quotas
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMRetentionQuotasApiV2 } from "@datadog/datadog-api-client-rum-retention-quotas";
import { v2 } from "@datadog/datadog-api-client-rum-retention-quotas";

const configuration = createConfiguration();
const apiInstance = new RUMRetentionQuotasApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumQuotaConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
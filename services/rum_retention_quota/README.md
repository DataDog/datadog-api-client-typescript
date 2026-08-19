# @datadog/datadog-api-client-rum-retention-quota

## Description

Manage RUM retention quota configurations for your organization's RUM applications.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-retention-quota
# Yarn
yarn add @datadog/datadog-api-client-rum-retention-quota
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMRetentionQuotaApiV2 } from "@datadog/datadog-api-client-rum-retention-quota";
import { v2 } from "@datadog/datadog-api-client-rum-retention-quota";

const configuration = createConfiguration();
const apiInstance = new RUMRetentionQuotaApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRumQuotaConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
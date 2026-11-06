# @datadog/datadog-api-client-rum-managed-archives

## Description

Configure Managed Archives for RUM applications. Your organization must have Managed Archives enabled.

Requires `rum_rehydration_filter_read` to list or get configurations, or `rum_rehydration_filter_write` to create, update, or delete them.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-managed-archives
# Yarn
yarn add @datadog/datadog-api-client-rum-managed-archives
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMManagedArchivesApiV2 } from "@datadog/datadog-api-client-rum-managed-archives";
import { v2 } from "@datadog/datadog-api-client-rum-managed-archives";

const configuration = createConfiguration();
const apiInstance = new RUMManagedArchivesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listRUMArchiveConfigs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
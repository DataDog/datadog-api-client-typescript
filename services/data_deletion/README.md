# @datadog/datadog-api-client-data-deletion

## Description

The Data Deletion API allows the user to target and delete data from the allowed products. It's enabled for Logs and depends on the `logs_delete_data` permission.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-data-deletion
# Yarn
yarn add @datadog/datadog-api-client-data-deletion
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DataDeletionApiV2 } from "@datadog/datadog-api-client-data-deletion";
import { v2 } from "@datadog/datadog-api-client-data-deletion";

const configuration = createConfiguration();
const apiInstance = new DataDeletionApiV2(configuration);
const params = {/* parameters */};

apiInstance.createDataDeletionRequest(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
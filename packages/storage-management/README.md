# Storage Management

`@datadog/datadog-api-client-storage-management`

## Description

Storage inventory sync configurations.

Products: Storage Management

Enable Storage Management for S3 buckets, GCS buckets, and Azure containers. Each configuration registers the destination that holds inventory reports for the storage being monitored.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-storage-management
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-storage-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-storage-management";

const configuration = createConfiguration();
const apiInstance = new v2.StorageManagementApi(configuration);
const params = {/* parameters */};

apiInstance.upsertSyncConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
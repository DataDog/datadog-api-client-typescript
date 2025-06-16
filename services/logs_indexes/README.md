# @datadog/datadog-api-client-logs-indexes

## Description

Manage configuration of [log indexes](https://docs.datadoghq.com/logs/indexes/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs-indexes
# Yarn
yarn add @datadog/datadog-api-client-logs-indexes
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsIndexesApiV1 } from "@datadog/datadog-api-client-logs-indexes";
import { v1 } from "@datadog/datadog-api-client-logs-indexes";

const configuration = createConfiguration();
const apiInstance = new LogsIndexesApiV1(configuration);

apiInstance.getLogsIndexOrder().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
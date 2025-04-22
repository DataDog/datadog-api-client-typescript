# @datadog/datadog-api-client-logs-indexes

## Description

Manage configuration of [log indexes](https://docs.datadoghq.com/logs/indexes/).

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

const configuration = createConfiguration();
const apiInstance = new LogsIndexesApiV1(configuration);

const result = await apiInstance.getLogsIndexOrder(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
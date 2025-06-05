# @datadog/datadog-api-client-logs-archives

## Description

Archives forward all the logs ingested to a cloud storage system.

See the [Archives Page](https://app.datadoghq.com/logs/pipelines/archives)
for a list of the archives currently configured in Datadog.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs-archives
# Yarn
yarn add @datadog/datadog-api-client-logs-archives
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsArchivesApiV2 } from "@datadog/datadog-api-client-logs-archives";
import { v2 } from "@datadog/datadog-api-client-logs-archives";

const configuration = createConfiguration();
const apiInstance = new LogsArchivesApiV2(configuration);

apiInstance.getLogsArchiveOrder().then((data: v2.LogsArchiveOrder) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
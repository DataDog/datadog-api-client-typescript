# @datadog/datadog-api-client-logs-archive-searches

## Description

Search the logs stored in a Logs Archive without reindexing them, and optionally rehydrate
the matches into a retained historical view.

See the [Rehydrating from Archives](https://app.datadoghq.com/logs/pipelines/historical-views)
page for the searches currently running in Datadog.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs-archive-searches
# Yarn
yarn add @datadog/datadog-api-client-logs-archive-searches
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsArchiveSearchesApiV2 } from "@datadog/datadog-api-client-logs-archive-searches";
import { v2 } from "@datadog/datadog-api-client-logs-archive-searches";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "LogsArchiveSearchesApi.v2.createArchiveSearch": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new LogsArchiveSearchesApiV2(configuration);
const params = {/* parameters */};

apiInstance.createArchiveSearch(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
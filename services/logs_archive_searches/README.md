# @datadog/datadog-api-client-logs-archive-searches

## Description

Archive Search queries logs directly from long-term storage archives without prior
rehydration and charges only for the data scanned.

A search runs in one of two modes. By default it scans the archive and retains up to
100,000 matching logs for 24 hours on a dedicated results page. Include a `rehydration`
object to run a Search & Rehydration instead, which retains the matches for a custom
retention period and makes them available in Log Explorer, Dashboards, and Notebooks.

A search requires the `logs_write_historical_view` or `logs_write_archive_search`
permission. Rehydration requires `logs_write_historical_view`.

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
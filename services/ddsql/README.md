# @datadog/datadog-api-client-ddsql

## Description

Execute DDSQL queries against the Datadog data catalog and poll for their results.
Queries are dispatched asynchronously: the initial request may return a `running` state with
a `query_id`, and clients poll the fetch endpoint until the response transitions to
`completed` with a column-major result set.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ddsql
# Yarn
yarn add @datadog/datadog-api-client-ddsql
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DDSQLApiV2 } from "@datadog/datadog-api-client-ddsql";
import { v2 } from "@datadog/datadog-api-client-ddsql";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DDSQLApi.v2.executeDdsqlTabularQuery": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DDSQLApiV2(configuration);
const params = {/* parameters */};

apiInstance.executeDdsqlTabularQuery(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
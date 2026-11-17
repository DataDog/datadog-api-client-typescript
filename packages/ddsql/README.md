# DDSQL

`@datadog/datadog-api-client-ddsql`

## Description

DDSQL tabular queries.

Products: DDSQL Editor

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
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-ddsql
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-ddsql
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-ddsql";

const configuration = createConfiguration();
const apiInstance = new v2.DDSQLApi(configuration);
const params = {/* parameters */};

apiInstance.executeDdsqlTabularQuery(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
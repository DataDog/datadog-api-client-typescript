# Reference Tables

`@datadog/datadog-api-client-reference-tables`

## Description

Reference tables and their rows.

Products: Reference Tables

View and manage Reference Tables in your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-reference-tables
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-reference-tables
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-reference-tables";

const configuration = createConfiguration();
const apiInstance = new v2.ReferenceTablesApi(configuration);
const params = {/* parameters */};

apiInstance.batchRowsQuery(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-reference-tables

## Description

View and manage Reference Tables in your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-reference-tables
# Yarn
yarn add @datadog/datadog-api-client-reference-tables
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ReferenceTablesApiV2 } from "@datadog/datadog-api-client-reference-tables";
import { v2 } from "@datadog/datadog-api-client-reference-tables";

const configuration = createConfiguration();
const apiInstance = new ReferenceTablesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTables(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
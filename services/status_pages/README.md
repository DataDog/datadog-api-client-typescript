# @datadog/datadog-api-client-status-pages

## Description

Auto-generated tag Status Pages

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-status-pages
# Yarn
yarn add @datadog/datadog-api-client-status-pages
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { StatusPagesApiV2 } from "@datadog/datadog-api-client-status-pages";
import { v2 } from "@datadog/datadog-api-client-status-pages";

const configuration = createConfiguration();
const apiInstance = new StatusPagesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listStatusPages(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
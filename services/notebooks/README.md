# @datadog/datadog-api-client-notebooks

## Description

Interact with your notebooks through the API to search and retrieve notebooks.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-notebooks
# Yarn
yarn add @datadog/datadog-api-client-notebooks
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { NotebooksApiV2 } from "@datadog/datadog-api-client-notebooks";
import { v2 } from "@datadog/datadog-api-client-notebooks";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "NotebooksApi.v2.searchNotebooks": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new NotebooksApiV2(configuration);
const params = {/* parameters */};

apiInstance.searchNotebooks(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
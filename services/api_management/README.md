# @datadog/datadog-api-client-api-management

## Description

Configure your API endpoints through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-api-management
# Yarn
yarn add @datadog/datadog-api-client-api-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { APIManagementApiV2 } from "@datadog/datadog-api-client-api-management";
import { v2 } from "@datadog/datadog-api-client-api-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "APIManagementApi.v2.listAPIs": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new APIManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.listAPIs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
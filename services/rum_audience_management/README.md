# @datadog/datadog-api-client-rum-audience-management

## Description

Auto-generated tag RUM Audience Management

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-audience-management
# Yarn
yarn add @datadog/datadog-api-client-rum-audience-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMAudienceManagementApiV2 } from "@datadog/datadog-api-client-rum-audience-management";
import { v2 } from "@datadog/datadog-api-client-rum-audience-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RUMAudienceManagementApi.v2.getAccountFacetInfo": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RUMAudienceManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.getAccountFacetInfo(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
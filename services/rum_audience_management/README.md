# @datadog/datadog-api-client-rum-audience-management

## Description

Auto-generated tag Rum Audience Management

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
import { RumAudienceManagementApiV2 } from "@datadog/datadog-api-client-rum-audience-management";
import { v2 } from "@datadog/datadog-api-client-rum-audience-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RumAudienceManagementApi.v2.getAccountFacetInfo": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RumAudienceManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.getAccountFacetInfo(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
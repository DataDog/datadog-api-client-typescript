# @datadog/datadog-api-client-service-now-integration

## Description

Manage your ServiceNow Integration. ServiceNow is a cloud-based platform that helps organizations manage digital workflows for enterprise operations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-now-integration
# Yarn
yarn add @datadog/datadog-api-client-service-now-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceNowIntegrationApiV2 } from "@datadog/datadog-api-client-service-now-integration";
import { v2 } from "@datadog/datadog-api-client-service-now-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ServiceNowIntegrationApi.v2.listServiceNowAssignmentGroups": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ServiceNowIntegrationApiV2(configuration);
const params = {/* parameters */};

apiInstance.listServiceNowAssignmentGroups(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
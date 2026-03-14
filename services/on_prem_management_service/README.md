# @datadog/datadog-api-client-on-prem-management-service

## Description

Manage on-premises runners for workflow automation and app builder. Use these endpoints to enroll runners, check enrollment status, and register tokens for query execution.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-on-prem-management-service
# Yarn
yarn add @datadog/datadog-api-client-on-prem-management-service
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OnPremManagementServiceApiV2 } from "@datadog/datadog-api-client-on-prem-management-service";
import { v2 } from "@datadog/datadog-api-client-on-prem-management-service";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OnPremManagementServiceApi.v2.createOnPremManagementServiceEnrollment": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OnPremManagementServiceApiV2(configuration);
const params = {/* parameters */};

apiInstance.createOnPremManagementServiceEnrollment(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-change-management

## Description

View and manage change requests within Change Management. See the [Case Management page](https://docs.datadoghq.com/service_management/case_management/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-change-management
# Yarn
yarn add @datadog/datadog-api-client-change-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ChangeManagementApiV2 } from "@datadog/datadog-api-client-change-management";
import { v2 } from "@datadog/datadog-api-client-change-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ChangeManagementApi.v2.createChangeRequest": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ChangeManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.createChangeRequest(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
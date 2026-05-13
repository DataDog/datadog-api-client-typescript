# @datadog/datadog-api-client-dependency-management

## Description

Manage AI-powered dependency upgrade workflows for your organization's repositories.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dependency-management
# Yarn
yarn add @datadog/datadog-api-client-dependency-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DependencyManagementApiV2 } from "@datadog/datadog-api-client-dependency-management";
import { v2 } from "@datadog/datadog-api-client-dependency-management";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DependencyManagementApi.v2.createAIWorkflow": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DependencyManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.createAIWorkflow(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
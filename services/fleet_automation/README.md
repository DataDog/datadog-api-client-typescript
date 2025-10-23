# @datadog/datadog-api-client-fleet-automation

## Description

Manage automated deployments across your fleet of hosts.
Use these endpoints to create, retrieve, and cancel deployments
that apply configuration changes to multiple hosts at once.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-fleet-automation
# Yarn
yarn add @datadog/datadog-api-client-fleet-automation
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { FleetAutomationApiV2 } from "@datadog/datadog-api-client-fleet-automation";
import { v2 } from "@datadog/datadog-api-client-fleet-automation";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "FleetAutomationApi.v2.listFleetDeployments": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new FleetAutomationApiV2(configuration);
const params = {/* parameters */};

apiInstance.listFleetDeployments(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
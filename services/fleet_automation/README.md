# @datadog/datadog-api-client-fleet-automation

## Description

Manage automated deployments across your fleet of hosts.

Fleet Automation provides two types of deployments:

Configuration Deployments (`/configure`):
- Apply configuration file changes to target hosts
- Support merge-patch operations to update specific configuration fields
- Support delete operations to remove configuration files
- Useful for updating Datadog Agent settings, integration configs, and more

Package Upgrade Deployments (`/upgrade`):
- Upgrade the Datadog Agent to specific versions

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
        "FleetAutomationApi.v2.listFleetAgentVersions": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new FleetAutomationApiV2(configuration);

apiInstance.listFleetAgentVersions().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
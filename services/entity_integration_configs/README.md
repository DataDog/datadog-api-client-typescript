# @datadog/datadog-api-client-entity-integration-configs

## Description

Manage per-integration configurations for the Internal Developer Portal (IDP). These configurations control which external resources (for example, GitHub repositories, Jira projects, or PagerDuty services) are synced as entities into the Software Catalog.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-entity-integration-configs
# Yarn
yarn add @datadog/datadog-api-client-entity-integration-configs
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { EntityIntegrationConfigsApiV2 } from "@datadog/datadog-api-client-entity-integration-configs";
import { v2 } from "@datadog/datadog-api-client-entity-integration-configs";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "EntityIntegrationConfigsApi.v2.getEntityIntegrationConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new EntityIntegrationConfigsApiV2(configuration);
const params = {/* parameters */};

apiInstance.getEntityIntegrationConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# Internal Developer Portal

`@datadog/datadog-api-client-software-catalog`

## Description

Software catalog entities, service definitions, scorecards, entity integration configs and the API catalog.

Products: Internal Developer Portal

Configure your API endpoints through the Datadog API.

Manage per-integration configurations for the Internal Developer Portal (IDP). These configurations control which external resources (for example, GitHub repositories, Jira projects, or PagerDuty services) are synced as entities into the Software Catalog.

API to create and update scorecard rules and outcomes. See [Scorecards](https://docs.datadoghq.com/service_catalog/scorecards) for more information.

API to create, update, retrieve and delete service definitions.
Note: Service Catalog [v3.0 schema](https://docs.datadoghq.com/service_catalog/service_definitions/v3-0/) has new API endpoints documented under [Software Catalog](https://docs.datadoghq.com/api/latest/software-catalog/). Use the following Service Definition endpoints for v2.2 and earlier.

API to create, update, retrieve, and delete Software Catalog entities.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-software-catalog
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-software-catalog
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-software-catalog";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listAPIs"] = true;
const apiInstance = new v2.APIManagementApi(configuration);
const params = {/* parameters */};

apiInstance.listAPIs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
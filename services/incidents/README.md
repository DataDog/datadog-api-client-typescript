# @datadog/datadog-api-client-incidents

## Description

Manage incident response, as well as associated attachments, metadata, and todos. See the [Incident Management page](https://docs.datadoghq.com/service_management/incident_management/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-incidents
# Yarn
yarn add @datadog/datadog-api-client-incidents
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IncidentsApiV2 } from "@datadog/datadog-api-client-incidents";
import { v2 } from "@datadog/datadog-api-client-incidents";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "IncidentsApi.v2.listIncidents": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new IncidentsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listIncidents(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
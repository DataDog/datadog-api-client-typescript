# @datadog/datadog-api-client-incident-services

## Description

Create, update, delete, and retrieve services which can be associated with incidents. See the [Incident Management page](https://docs.datadoghq.com/service_management/incident_management/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-incident-services
# Yarn
yarn add @datadog/datadog-api-client-incident-services
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IncidentServicesApiV2 } from "@datadog/datadog-api-client-incident-services";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listIncidentServices"] = true;
const apiInstance = new IncidentServicesApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listIncidentServices(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
# @datadog/datadog-api-client-incidents

## Description

Manage incident response, as well as associated attachments, metadata, and todos. See the [Incident Management page](https://docs.datadoghq.com/service_management/incident_management/) for more information.

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

const configuration = createConfiguration();
configuration.unstableOperations["v2.listIncidents"] = true;
const apiInstance = new IncidentsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listIncidents(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
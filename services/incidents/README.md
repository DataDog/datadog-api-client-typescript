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
import { v2 } from "@datadog/datadog-api-client-incidents";

const configuration = createConfiguration();
// Enable unstable operations
configuration.unstableOperations["v2.listIncidents"] = true;
const apiInstance = new IncidentsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listIncidents(params).then((data: v2.IncidentsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
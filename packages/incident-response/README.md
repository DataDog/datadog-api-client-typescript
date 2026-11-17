# Incident Response

`@datadog/datadog-api-client-incident-response`

## Description

Incidents and their configuration, On-Call schedules, escalation policies, routing rules and paging.

Products: Incident Response

Manage incident response, as well as associated attachments, metadata, and todos. See the [Incident Management page](https://docs.datadoghq.com/service_management/incident_management/) for more information.

Configure your [Datadog On-Call](https://docs.datadoghq.com/service_management/on-call/)
directly through the Datadog API.

Trigger and manage [Datadog On-Call](https://docs.datadoghq.com/service_management/on-call/)
pages directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-incident-response
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-incident-response
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-incident-response";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);
const params = {/* parameters */};

apiInstance.listIncidents(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
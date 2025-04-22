# @datadog/datadog-api-client-incident-teams

## Description

The Incident Teams endpoints are deprecated. See the [Teams API endpoints](https://docs.datadoghq.com/api/latest/teams/) to create, update, delete, and retrieve teams which can be associated with incidents.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-incident-teams
# Yarn
yarn add @datadog/datadog-api-client-incident-teams
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IncidentTeamsApiV2 } from "@datadog/datadog-api-client-incident-teams";
import { v2 } from "@datadog/datadog-api-client-incident-teams";

const configuration = createConfiguration();
// Enable unstable operations
configuration.unstableOperations["v2.listIncidentTeams"] = true;
const apiInstance = new IncidentTeamsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listIncidentTeams(params).then((data: v2.IncidentTeamsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
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

const configuration = createConfiguration();
configuration.unstableOperations["v2.listIncidentTeams"] = true;
const apiInstance = new IncidentTeamsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listIncidentTeams(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
# @datadog/datadog-api-client-teams

## Description

View and manage teams within Datadog. See the [Teams page](https://docs.datadoghq.com/account_management/teams/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-teams
# Yarn
yarn add @datadog/datadog-api-client-teams
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TeamsApiV2 } from "@datadog/datadog-api-client-teams";
import { v2 } from "@datadog/datadog-api-client-teams";

const configuration = createConfiguration();
const apiInstance = new TeamsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTeams(params).then((data: v2.TeamsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
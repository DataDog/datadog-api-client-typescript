# Teams

`@datadog/datadog-api-client-teams`

## Description

Teams, memberships, links and ownership.

Products: Account Management

View and manage teams within Datadog. See the [Teams page](https://docs.datadoghq.com/account_management/teams/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-teams
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-teams
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-teams";

const configuration = createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);
const params = {/* parameters */};

apiInstance.listTeams(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-team-connections

## Description

View and manage relationships between Datadog teams and teams from external sources, such as GitHub.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-team-connections
# Yarn
yarn add @datadog/datadog-api-client-team-connections
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TeamConnectionsApiV2 } from "@datadog/datadog-api-client-team-connections";
import { v2 } from "@datadog/datadog-api-client-team-connections";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TeamConnectionsApi.v2.listTeamConnections": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TeamConnectionsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTeamConnections(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
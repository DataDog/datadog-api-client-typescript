# @datadog/datadog-api-client-rum-teams-ownership

## Description

Manage teams ownership mappings between RUM views and the teams that own them.
See <https://docs.datadoghq.com/real_user_monitoring/ownership_of_views/>.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-teams-ownership
# Yarn
yarn add @datadog/datadog-api-client-rum-teams-ownership
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumTeamsOwnershipApiV2 } from "@datadog/datadog-api-client-rum-teams-ownership";
import { v2 } from "@datadog/datadog-api-client-rum-teams-ownership";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "RumTeamsOwnershipApi.v2.listTeamsOwnershipMappings": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new RumTeamsOwnershipApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTeamsOwnershipMappings(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
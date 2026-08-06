# @datadog/datadog-api-client-governance-console

## Description

The Governance Console finds issues that build up across a Datadog organization over time,
such as API keys nobody uses, users who no longer need access, or custom metrics that are
never queried, and tracks them through to a fix.

These endpoints allow you to:

- Read insights: measures of how your organization uses Datadog, each with the query behind it.
- Configure controls: the rules deciding how one kind of issue is found and what is done about it.
- Act on detections: the issues a control found. Assign, defer, accept as an exception, or fix.
- Manage settings: organization-wide configuration and notification destinations.

See the [Governance Console page](https://docs.datadoghq.com/account_management/governance_console/)
for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-governance-console
# Yarn
yarn add @datadog/datadog-api-client-governance-console
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GovernanceConsoleApiV2 } from "@datadog/datadog-api-client-governance-console";
import { v2 } from "@datadog/datadog-api-client-governance-console";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "GovernanceConsoleApi.v2.getGovernanceConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new GovernanceConsoleApiV2(configuration);

apiInstance.getGovernanceConfig().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
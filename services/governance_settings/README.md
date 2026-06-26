# @datadog/datadog-api-client-governance-settings

## Description

Governance Settings cover organization-wide Governance Console configuration, usage limits and
resource limits, and notification preferences that determine when and how the Console alerts
users about governance activity.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-governance-settings
# Yarn
yarn add @datadog/datadog-api-client-governance-settings
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GovernanceSettingsApiV2 } from "@datadog/datadog-api-client-governance-settings";
import { v2 } from "@datadog/datadog-api-client-governance-settings";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "GovernanceSettingsApi.v2.getGovernanceConfig": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new GovernanceSettingsApiV2(configuration);

apiInstance.getGovernanceConfig().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-governance-controls

## Description

Governance Controls pair a detection definition with an organization's detection, notification,
and mitigation configuration within the Governance Console. Each control reports how a class of
governance issue (such as unused API keys or unqueried metrics) is detected and remediated, along
with counts of active and mitigated detections.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-governance-controls
# Yarn
yarn add @datadog/datadog-api-client-governance-controls
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GovernanceControlsApiV2 } from "@datadog/datadog-api-client-governance-controls";
import { v2 } from "@datadog/datadog-api-client-governance-controls";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "GovernanceControlsApi.v2.listGovernanceControls": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new GovernanceControlsApiV2(configuration);

apiInstance.listGovernanceControls().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
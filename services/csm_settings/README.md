# @datadog/datadog-api-client-csm-settings

## Description

Datadog Cloud Security Management (CSM) Settings APIs allow you to list and filter
your cloud hosts monitored by CSM, covering both agentless and agent-based discovery.
For more information, see [Cloud Security Management](https://docs.datadoghq.com/security/cloud_security_management).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-csm-settings
# Yarn
yarn add @datadog/datadog-api-client-csm-settings
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CSMSettingsApiV2 } from "@datadog/datadog-api-client-csm-settings";
import { v2 } from "@datadog/datadog-api-client-csm-settings";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CSMSettingsApi.v2.listCSMAgentlessHosts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CSMSettingsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listCSMAgentlessHosts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-csm-agents

## Description

Datadog Cloud Security Management (CSM) delivers real-time threat detection
and continuous configuration audits across your entire cloud infrastructure,
all in a unified view for seamless collaboration and faster remediation.
Go to https://docs.datadoghq.com/security/cloud_security_management to learn more

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-csm-agents
# Yarn
yarn add @datadog/datadog-api-client-csm-agents
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CSMAgentsApiV2 } from "@datadog/datadog-api-client-csm-agents";
import { v2 } from "@datadog/datadog-api-client-csm-agents";

const configuration = createConfiguration();
const apiInstance = new CSMAgentsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listAllCSMAgents(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-agent-health

## Description

View Agent Health issues reported for node Agents and Cluster Agents.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-agent-health
# Yarn
yarn add @datadog/datadog-api-client-agent-health
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AgentHealthApiV2 } from "@datadog/datadog-api-client-agent-health";
import { v2 } from "@datadog/datadog-api-client-agent-health";

const configuration = createConfiguration();
const apiInstance = new AgentHealthApiV2(configuration);
const params = {/* parameters */};

apiInstance.listAgentHealthHostIssues(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
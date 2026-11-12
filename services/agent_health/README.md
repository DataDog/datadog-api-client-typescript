# @datadog/datadog-api-client-agent-health

## Description

List open Agent Health issues across your organization and get an issue with its available remediation. Issues are reported by node Agents, Cluster Agents, and OpenTelemetry collectors. The meaning of `resource_id` depends on `resource_kind`: hostname for `host`, DaemonSet UID for `deployment` (node Agent), cluster UUID for `cluster`, hostname of the host running the Cluster Agent for `cluster_agent`, or OpenTelemetry collector ID for `otel`.

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
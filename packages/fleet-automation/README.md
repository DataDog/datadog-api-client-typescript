# Fleet Automation

`@datadog/datadog-api-client-fleet-automation`

## Description

Agent configuration and upgrade deployments, schedules and Agent health issues.

Products: Fleet Automation

List open Agent Health issues across your organization and get an issue with its available remediation. Issues are reported by node Agents, Cluster Agents, and OpenTelemetry collectors. The meaning of `resource_id` depends on `resource_kind`: hostname for `host`, DaemonSet UID for `deployment` (node Agent), cluster UUID for `cluster`, hostname of the host running the Cluster Agent for `cluster_agent`, or OpenTelemetry collector ID for `otel`.

Manage automated deployments across your fleet of hosts.

Fleet Automation provides two types of deployments:

Configuration Deployments (`/configure`):
- Apply configuration file changes to target hosts
- Support merge-patch operations to update specific configuration fields
- Support delete operations to remove configuration files
- Useful for updating Datadog Agent settings, integration configs, and more

Package Upgrade Deployments (`/upgrade`):
- Upgrade the Datadog Agent to specific versions

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-fleet-automation
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-fleet-automation
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-fleet-automation";

const configuration = createConfiguration();
const apiInstance = new v2.AgentHealthApi(configuration);
const params = {/* parameters */};

apiInstance.listAgentHealthHostIssues(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
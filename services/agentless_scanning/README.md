# @datadog/datadog-api-client-agentless-scanning

## Description

Datadog Agentless Scanning provides visibility into risks and vulnerabilities
within your hosts, running containers, and serverless functions—all without
requiring teams to install Agents on every host or where Agents cannot be installed.
Agentless offers also Sensitive Data Scanning capabilities on your storage.
Go to https://www.datadoghq.com/blog/agentless-scanning/ to learn more.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-agentless-scanning
# Yarn
yarn add @datadog/datadog-api-client-agentless-scanning
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AgentlessScanningApiV2 } from "@datadog/datadog-api-client-agentless-scanning";

const configuration = createConfiguration();
const apiInstance = new AgentlessScanningApiV2(configuration);

const result = await apiInstance.listAwsScanOptions(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
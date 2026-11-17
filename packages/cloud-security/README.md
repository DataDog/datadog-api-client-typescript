# Cloud Security

`@datadog/datadog-api-client-cloud-security`

## Description

Misconfigurations, compliance frameworks, agentless scanning, CSM agents, coverage analysis, ownership and settings.

Products: Cloud Security

Datadog Agentless Scanning provides visibility into risks and vulnerabilities
within your hosts, running containers, and serverless functions—all without
requiring teams to install Agents on every host or where Agents cannot be installed.
Agentless offers also Sensitive Data Scanning capabilities on your storage.
Go to https://www.datadoghq.com/blog/agentless-scanning/ to learn more.

Datadog Cloud Security Misconfigurations provides aggregated views of
compliance rules and findings across your cloud resources, helping you assess
posture against industry frameworks (such as HIPAA, SOC 2, ISO 27001) and custom
frameworks. Learn more at https://docs.datadoghq.com/security/cloud_security_management/misconfigurations/#maintain-compliance-with-industry-frameworks-and-benchmarks.

Datadog Cloud Security Management (CSM) delivers real-time threat detection
and continuous configuration audits across your entire cloud infrastructure,
all in a unified view for seamless collaboration and faster remediation.
Go to https://docs.datadoghq.com/security/cloud_security_management to learn more

Datadog Cloud Security Management (CSM) delivers real-time threat detection
and continuous configuration audits across your entire cloud infrastructure,
all in a unified view for seamless collaboration and faster remediation.
Go to https://docs.datadoghq.com/security/cloud_security_management to learn more.

Datadog Cloud Security Management (CSM) Ownership infers the most likely owner
for a cloud resource by combining ownership signals from across the platform,
and lets you review the inference, inspect its evidence, and submit feedback to
persist, override, or correct the inferred owner.
For more information, see [Cloud Security Management](https://docs.datadoghq.com/security/cloud_security_management).

Datadog Cloud Security Management (CSM) Settings APIs allow you to list and filter
your cloud hosts monitored by CSM, covering both agentless and agent-based discovery.
For more information, see [Cloud Security Management](https://docs.datadoghq.com/security/cloud_security_management).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-cloud-security
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-cloud-security
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-cloud-security";

const configuration = createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

apiInstance.listAwsScanOptions().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
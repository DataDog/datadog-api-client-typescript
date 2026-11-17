# Security Findings

`@datadog/datadog-api-client-security-findings`

## Description

Findings, triage, findings automation rules, vulnerabilities and SBOMs.

Products: Cloud Security, Code Security, App and API Protection

Search and triage security findings, create cases and tickets for them, and manage automation rules.

List vulnerabilities and vulnerable assets, get SBOMs, and import vulnerabilities from third-party scanners.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-security-findings
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-security-findings
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-security-findings";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listFindings"] = true;
const apiInstance = new v2.SecurityFindingsApi(configuration);
const params = {/* parameters */};

apiInstance.listFindings(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
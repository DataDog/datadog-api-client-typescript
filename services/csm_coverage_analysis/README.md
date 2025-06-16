# @datadog/datadog-api-client-csm-coverage-analysis

## Description

Datadog Cloud Security Management (CSM) delivers real-time threat detection
and continuous configuration audits across your entire cloud infrastructure,
all in a unified view for seamless collaboration and faster remediation.
Go to https://docs.datadoghq.com/security/cloud_security_management to learn more.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-csm-coverage-analysis
# Yarn
yarn add @datadog/datadog-api-client-csm-coverage-analysis
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CSMCoverageAnalysisApiV2 } from "@datadog/datadog-api-client-csm-coverage-analysis";
import { v2 } from "@datadog/datadog-api-client-csm-coverage-analysis";

const configuration = createConfiguration();
const apiInstance = new CSMCoverageAnalysisApiV2(configuration);

apiInstance.getCSMCloudAccountsCoverageAnalysis().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
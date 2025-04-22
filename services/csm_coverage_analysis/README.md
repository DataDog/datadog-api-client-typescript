# @datadog/datadog-api-client-csm-coverage-analysis

## Description

Datadog Cloud Security Management (CSM) delivers real-time threat detection
and continuous configuration audits across your entire cloud infrastructure,
all in a unified view for seamless collaboration and faster remediation.
Go to https://docs.datadoghq.com/security/cloud_security_management to learn more.

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

const configuration = createConfiguration();
const apiInstance = new CSMCoverageAnalysisApiV2(configuration);

const result = await apiInstance.getCSMCloudAccountsCoverageAnalysis(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
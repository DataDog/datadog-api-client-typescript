# @datadog/datadog-api-client-compliance

## Description

Datadog Cloud Security Misconfigurations provides aggregated views of
compliance rules and findings across your cloud resources, helping you assess
posture against industry frameworks (such as HIPAA, SOC 2, ISO 27001) and custom
frameworks. Learn more at https://docs.datadoghq.com/security/cloud_security_management/misconfigurations/#maintain-compliance-with-industry-frameworks-and-benchmarks.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-compliance
# Yarn
yarn add @datadog/datadog-api-client-compliance
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ComplianceApiV2 } from "@datadog/datadog-api-client-compliance";
import { v2 } from "@datadog/datadog-api-client-compliance";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ComplianceApi.v2.getRuleBasedView": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ComplianceApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRuleBasedView(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# Security Detection

`@datadog/datadog-api-client-security-detection`

## Description

Detection rules, signals, suppressions, security filters, notification rules, historical detections, entity risk scores and threat intelligence.

Products: Cloud SIEM, Cloud Security, Workload Protection, App and API Protection

Retrieves security risk scores for entities in your organization.

Create and manage your security rules, signals, filters, and more. See the [Datadog Security page](https://docs.datadoghq.com/security/) for more information.

Ingest and manage threat intelligence data for security enrichment and investigation.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-security-detection
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-security-detection
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-security-detection";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listEntityRiskScores"] = true;
const apiInstance = new v2.EntityRiskScoresApi(configuration);
const params = {/* parameters */};

apiInstance.listEntityRiskScores(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-security-monitoring

## Description

Create and manage your security rules, signals, filters, and more. See the [Datadog Security page](https://docs.datadoghq.com/security/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-security-monitoring
# Yarn
yarn add @datadog/datadog-api-client-security-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SecurityMonitoringApiV2 } from "@datadog/datadog-api-client-security-monitoring";
import { v2 } from "@datadog/datadog-api-client-security-monitoring";

const configuration = createConfiguration();
// Enable unstable operations
configuration.unstableOperations["v2.listFindings"] = true;
const apiInstance = new SecurityMonitoringApiV2(configuration);
const params = {/* parameters */};

apiInstance.listFindings(params).then((data: v2.ListFindingsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
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

const configuration = createConfiguration();
configuration.unstableOperations["v2.listFindings"] = true;
const apiInstance = new SecurityMonitoringApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listFindings(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
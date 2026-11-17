# Sensitive Data Scanner

`@datadog/datadog-api-client-sensitive-data-scanner`

## Description

Scanning groups, rules and standard patterns.

Products: Sensitive Data Scanner

Create, update, delete, and retrieve sensitive data scanner groups and rules. See the [Sensitive Data Scanner page](https://docs.datadoghq.com/sensitive_data_scanner/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-sensitive-data-scanner
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-sensitive-data-scanner
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-sensitive-data-scanner";

const configuration = createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

apiInstance.listScanningGroups().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
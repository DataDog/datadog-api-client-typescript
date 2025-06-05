# @datadog/datadog-api-client-sensitive-data-scanner

## Description

Create, update, delete, and retrieve sensitive data scanner groups and rules. See the [Sensitive Data Scanner page](https://docs.datadoghq.com/sensitive_data_scanner/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-sensitive-data-scanner
# Yarn
yarn add @datadog/datadog-api-client-sensitive-data-scanner
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SensitiveDataScannerApiV2 } from "@datadog/datadog-api-client-sensitive-data-scanner";
import { v2 } from "@datadog/datadog-api-client-sensitive-data-scanner";

const configuration = createConfiguration();
const apiInstance = new SensitiveDataScannerApiV2(configuration);

apiInstance.listScanningGroups().then((data: v2.SensitiveDataScannerGetConfigResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
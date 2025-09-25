# @datadog/datadog-api-client-case-management-type

## Description

View and configure case types within Case Management. See the [Case Management page](https://docs.datadoghq.com/service_management/case_management/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-case-management-type
# Yarn
yarn add @datadog/datadog-api-client-case-management-type
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CaseManagementTypeApiV2 } from "@datadog/datadog-api-client-case-management-type";
import { v2 } from "@datadog/datadog-api-client-case-management-type";

const configuration = createConfiguration();
const apiInstance = new CaseManagementTypeApiV2(configuration);

apiInstance.getAllCaseTypes().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
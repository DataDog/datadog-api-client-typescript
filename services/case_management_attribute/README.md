# @datadog/datadog-api-client-case-management-attribute

## Description

View and configure custom attributes within Case Management. See the [Case Management page](https://docs.datadoghq.com/service_management/case_management/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-case-management-attribute
# Yarn
yarn add @datadog/datadog-api-client-case-management-attribute
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CaseManagementAttributeApiV2 } from "@datadog/datadog-api-client-case-management-attribute";
import { v2 } from "@datadog/datadog-api-client-case-management-attribute";

const configuration = createConfiguration();
const apiInstance = new CaseManagementAttributeApiV2(configuration);

apiInstance.getAllCustomAttributes().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
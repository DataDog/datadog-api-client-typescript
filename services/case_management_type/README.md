# @datadog/datadog-api-client-case-management-type

## Description

View and configure work item types within Work Management. See the [Work Management page](https://docs.datadoghq.com/incident_response/work_management/) for more information.

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
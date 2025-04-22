# @datadog/datadog-api-client-case-management

## Description

View and manage cases and projects within Case Management. See the [Case Management page](https://docs.datadoghq.com/service_management/case_management/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-case-management
# Yarn
yarn add @datadog/datadog-api-client-case-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CaseManagementApiV2 } from "@datadog/datadog-api-client-case-management";

const configuration = createConfiguration();
const apiInstance = new CaseManagementApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.searchCases(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
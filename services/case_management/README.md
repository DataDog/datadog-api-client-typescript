# @datadog/datadog-api-client-case-management

## Description

**Note**: Work Management is the UI name for Case Management. These API endpoints and permissions use `case` terminology.

View and manage work items and projects within Work Management. For more information, see [Work Management](https://docs.datadoghq.com/incident_response/work_management/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

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
import { v2 } from "@datadog/datadog-api-client-case-management";

const configuration = createConfiguration();
const apiInstance = new CaseManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.searchCases(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
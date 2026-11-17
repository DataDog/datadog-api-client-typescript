# Work Management

`@datadog/datadog-api-client-case-management`

## Description

Work management cases, projects, attributes, case types and change requests.

Products: Incident Response

View and manage work items and projects within Work Management. API paths, resource types, and permissions retain `case` terminology. For more information, see [Work Management](https://docs.datadoghq.com/incident_response/work_management/).

View and configure custom attributes within Work Management. See the [Work Management page](https://docs.datadoghq.com/incident_response/work_management/) for more information.

View and configure work item types within Work Management. See the [Work Management page](https://docs.datadoghq.com/incident_response/work_management/) for more information.

View and manage change requests within Change Management. See the [Case Management page](https://docs.datadoghq.com/service_management/case_management/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-case-management
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-case-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-case-management";

const configuration = createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);
const params = {/* parameters */};

apiInstance.searchCases(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
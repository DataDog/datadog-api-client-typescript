# @datadog/datadog-api-client-jira-integration

## Description

Manage your Jira Integration. Atlassian Jira is a project management and issue tracking tool for teams to coordinate work and handle tasks efficiently.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-jira-integration
# Yarn
yarn add @datadog/datadog-api-client-jira-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { JiraIntegrationApiV2 } from "@datadog/datadog-api-client-jira-integration";
import { v2 } from "@datadog/datadog-api-client-jira-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "JiraIntegrationApi.v2.listJiraAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new JiraIntegrationApiV2(configuration);

apiInstance.listJiraAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
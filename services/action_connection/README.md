# @datadog/datadog-api-client-action-connection

## Description

Action connections extend your installed integrations and allow you to take action in your third-party systems
(e.g. AWS, GitLab, and Statuspage) with Datadog’s Workflow Automation and App Builder products.

Datadog’s Integrations automatically provide authentication for Slack, Microsoft Teams, PagerDuty, Opsgenie,
JIRA, GitHub, and Statuspage. You do not need additional connections in order to access these tools within
Workflow Automation and App Builder.

We offer granular access control for editing and resolving connections.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-action-connection
# Yarn
yarn add @datadog/datadog-api-client-action-connection
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ActionConnectionApiV2 } from "@datadog/datadog-api-client-action-connection";
import { v2 } from "@datadog/datadog-api-client-action-connection";

const configuration = createConfiguration();
const apiInstance = new ActionConnectionApiV2(configuration);
const params = {/* parameters */};

apiInstance.createActionConnection(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
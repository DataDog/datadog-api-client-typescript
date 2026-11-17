# Actions and Remediations

`@datadog/datadog-api-client-actions`

## Description

App Builder apps, workflows and their instances, action connections, datastores, forms and execution policies.

Products: Actions and Remediations

Action connections extend your installed integrations and allow you to take action in your third-party systems
(e.g. AWS, GitLab, and Statuspage) with Datadog’s Workflow Automation and App Builder products.

Datadog’s Integrations automatically provide authentication for Slack, Microsoft Teams, PagerDuty, Opsgenie,
JIRA, GitHub, and Statuspage. You do not need additional connections in order to access these tools within
Workflow Automation and App Builder.

To authenticate with your own GitHub App or personal access token, create a GitHub connection.

We offer granular access control for editing and resolving connections.

Leverage the Actions Datastore API to create, modify, and delete
items in datastores owned by your organization.

Datadog App Builder provides a low-code solution to rapidly develop and integrate secure, customized applications into your monitoring stack that are built to accelerate remediation at scale. These API endpoints allow you to create, read, update, delete, and publish apps.

Execution policies control which actions Datadog Action Platform is allowed to run
and where. Each policy pairs an effect (allow or deny) with a pattern of actions,
and can scope that decision to specific resources.

The Datadog Forms API lets you create and manage forms within the App Builder platform.
You can configure form settings, manage versions, and publish forms.

Datadog Workflow Automation allows you to automate your end-to-end processes by connecting Datadog with the rest of your tech stack. Build workflows to auto-remediate your alerts, streamline your incident and security processes, and reduce manual toil. Workflow Automation supports over 1,000+ OOTB actions, including AWS, JIRA, ServiceNow, GitHub, and OpenAI. Learn more in our Workflow Automation docs [here](https://docs.datadoghq.com/service_management/workflows/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-actions
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-actions
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-actions";

const configuration = createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);
const params = {/* parameters */};

apiInstance.listAppKeyRegistrations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-workflow-automation

## Description

Datadog Workflow Automation allows you to automate your end-to-end processes by connecting Datadog with the rest of your tech stack. Build workflows to auto-remediate your alerts, streamline your incident and security processes, and reduce manual toil. Workflow Automation supports over 1,000+ OOTB actions, including AWS, JIRA, ServiceNow, GitHub, and OpenAI. Learn more in our Workflow Automation docs [here](https://docs.datadoghq.com/service_management/workflows/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-workflow-automation
# Yarn
yarn add @datadog/datadog-api-client-workflow-automation
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { WorkflowAutomationApiV2 } from "@datadog/datadog-api-client-workflow-automation";
import { v2 } from "@datadog/datadog-api-client-workflow-automation";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "WorkflowAutomationApi.v2.createCustomAgentConversation": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new WorkflowAutomationApiV2(configuration);
const params = {/* parameters */};

apiInstance.createCustomAgentConversation(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
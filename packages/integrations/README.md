# Integrations

`@datadog/datadog-api-client-integrations`

## Description

Third-party SaaS, collaboration and notification integrations.

Products: Integrations

Manage your Datadog ChatGPT Enterprise integration accounts and account resources
directly through the Datadog API. See the
[ChatGPT Enterprise integration page](https://docs.datadoghq.com/integrations/chatgpt-enterprise/) for
more information.

Manage your Datadog Cloudflare integration directly through the Datadog API. See the [Cloudflare integration page](https://docs.datadoghq.com/integrations/cloudflare/) for more information.

Manage your Datadog Confluent Cloud integration accounts and account resources directly through the Datadog API. See the [Confluent Cloud page](https://docs.datadoghq.com/integrations/confluent_cloud/) for more information.

Manage your Datadog CoreWeave integration accounts and account resources
directly through the Datadog API. See the
[CoreWeave integration page](https://docs.datadoghq.com/integrations/coreweave/) for
more information.

Manage your Datadog Databricks integration accounts and account resources directly
through the Datadog API. See the
[Databricks integration page](https://docs.datadoghq.com/integrations/databricks/) for
more information.

Manage your Datadog Elastic Cloud integration accounts and account resources
directly through the Datadog API. See the
[Elastic Cloud integration page](https://docs.datadoghq.com/integrations/elastic-cloud/) for
more information.

Manage your Datadog Fastly integration accounts and services directly through the Datadog API. See the [Fastly integration page](https://docs.datadoghq.com/integrations/fastly/) for more information.

Configure your [Datadog Google Chat integration](https://docs.datadoghq.com/integrations/google-hangouts-chat/)
directly through the Datadog API.

The Integrations API is used to list available integrations
and retrieve information about their installation status.

Manage your Jira Integration. Atlassian Jira is a project management and issue tracking tool for teams to coordinate work and handle tasks efficiently.

Configure your [Datadog Microsoft Teams integration](https://docs.datadoghq.com/integrations/microsoft_teams/)
directly through the Datadog API. Note: These endpoints do not support legacy connector handles.

Configure your [Datadog Okta integration](https://docs.datadoghq.com/integrations/okta/) directly through the Datadog API.

Configure your [Datadog Opsgenie integration](https://docs.datadoghq.com/integrations/opsgenie/)
directly through the Datadog API.

Manage your ServiceNow Integration. ServiceNow is a cloud-based platform that helps organizations manage digital workflows for enterprise operations.

Configure your [Datadog Slack integration](https://docs.datadoghq.com/integrations/slack/)
directly through the Datadog API.

Manage your Datadog Snowflake integration accounts
directly through the Datadog API. See the
[Snowflake integration page](https://docs.datadoghq.com/integrations/snowflake_web/) for
more information.

Configure your [Datadog Statuspage integration](https://docs.datadoghq.com/integrations/statuspage/)
directly through the Datadog API.

Manage your Datadog Temporal Cloud OpenMetrics integration accounts and account resources
directly through the Datadog API. See the
[Temporal Cloud OpenMetrics integration page](https://docs.datadoghq.com/integrations/temporal-cloud-openmetrics/) for
more information.

Manage your Datadog Twilio integration accounts and account resources directly
through the Datadog API. See the
[Twilio integration page](https://docs.datadoghq.com/integrations/twilio/) for
more information.

Manage web integration accounts programmatically through the Datadog API.
See the [Web Integrations page](https://app.datadoghq.com/integrations) for more information.

Configure your [Datadog Webhooks integration](https://docs.datadoghq.com/integrations/webhooks/)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-integrations
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-integrations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-integrations";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listChatGPTEnterpriseIntegrationAccounts"] = true;
const apiInstance = new v2.ChatGPTEnterpriseIntegrationApi(configuration);

apiInstance.listChatGPTEnterpriseIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
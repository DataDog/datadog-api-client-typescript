# Dashboards

`@datadog/datadog-api-client-dashboards`

## Description

Dashboards, dashboard lists, sharing, secure embeds, powerpacks, annotations, scheduled reports, graph snapshots and Watchdog Explains anomaly investigations.

Products: Dashboards

Add annotations to dashboards and notebooks to mark events such as deployments, incidents, or other notable moments in time.

Interact with your dashboard lists through the API to
organize, find, and share all of your dashboards with your team and
organization.

Manage securely embedded Datadog dashboards. Secure embeds use HMAC-SHA256 signed sessions
for authentication, enabling customers to embed dashboards in their own applications with
server-side auth control. Unlike public dashboards (open URL) or invite dashboards
(email-based access), secure embeds provide programmatic access control.

**Requirements:**
- **Embed** sharing must be enabled under **Organization Settings** > **Public Sharing** > **Shared Dashboards**.
- You need [an API key and an application key](https://docs.datadoghq.com/account_management/api-app-keys/) to interact with these endpoints.

Manage dashboard sharing configurations.

Get usage statistics for the dashboards in your organization, including view
counts, last-edit times, widget counts, and quality scores. See the
[Dashboards documentation](https://docs.datadoghq.com/dashboards/) for more
information.

The Powerpack endpoints allow you to:

- Get a Powerpack
- Create a Powerpack
- Delete a Powerpack
- Get a list of all Powerpacks

The Patch and Delete API methods can only be performed on a Powerpack by
a user who has the powerpack create permission for that specific Powerpack.

Read [Scale Graphing Expertise with Powerpacks](https://docs.datadoghq.com/dashboards/guide/powerpacks-best-practices/) for more information.

Create and manage scheduled reports. A scheduled report renders a dashboard or integration
dashboard on a recurring cadence and delivers it to a set of recipients over email, Slack,
or Microsoft Teams.

The Reporting and Sharing endpoints allow you to create snapshots of graph widgets and other shareable resources.

Extract watermarks embedded in dashboard screenshots to retrieve cached widget state.

Investigate metrics timeseries anomalies and return deterministic findings.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-dashboards
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-dashboards
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-dashboards";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listAnnotations"] = true;
const apiInstance = new v2.AnnotationsApi(configuration);
const params = {/* parameters */};

apiInstance.listAnnotations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
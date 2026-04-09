# @datadog/datadog-api-client-dashboard-secure-embed

## Description

Manage securely embedded Datadog dashboards. Secure embeds use HMAC-SHA256 signed sessions for authentication, enabling customers to embed dashboards in their own applications with server-side auth control. Unlike public dashboards (open URL) or invite dashboards (email-based access), secure embeds provide programmatic access control.
**Requirements:** - Org setting: SharedDashboards > Embed sharing must be enabled. - AuthN: Datadog API key and application key. - Read operations require `dashboards_read` permission. - Write operations require `dashboards_embed_share` permission.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dashboard-secure-embed
# Yarn
yarn add @datadog/datadog-api-client-dashboard-secure-embed
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DashboardSecureEmbedApiV2 } from "@datadog/datadog-api-client-dashboard-secure-embed";
import { v2 } from "@datadog/datadog-api-client-dashboard-secure-embed";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "DashboardSecureEmbedApi.v2.createDashboardSecureEmbed": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new DashboardSecureEmbedApiV2(configuration);
const params = {/* parameters */};

apiInstance.createDashboardSecureEmbed(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
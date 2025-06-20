# @datadog/datadog-api-client-cloudflare-integration

## Description

Manage your Datadog Cloudflare integration directly through the Datadog API. See the [Cloudflare integration page](https://docs.datadoghq.com/integrations/cloudflare/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-cloudflare-integration
# Yarn
yarn add @datadog/datadog-api-client-cloudflare-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CloudflareIntegrationApiV2 } from "@datadog/datadog-api-client-cloudflare-integration";
import { v2 } from "@datadog/datadog-api-client-cloudflare-integration";

const configuration = createConfiguration();
const apiInstance = new CloudflareIntegrationApiV2(configuration);

apiInstance.listCloudflareAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
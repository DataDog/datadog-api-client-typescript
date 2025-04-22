# @datadog/datadog-api-client-gcp-integration

## Description

Configure your Datadog-Google Cloud Platform (GCP) integration directly
through the Datadog API. Read more about the [Datadog-Google Cloud Platform integration](https://docs.datadoghq.com/integrations/google_cloud_platform).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-gcp-integration
# Yarn
yarn add @datadog/datadog-api-client-gcp-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GCPIntegrationApiV2 } from "@datadog/datadog-api-client-gcp-integration";
import { v2 } from "@datadog/datadog-api-client-gcp-integration";

const configuration = createConfiguration();
const apiInstance = new GCPIntegrationApiV2(configuration);

apiInstance.listGCPSTSAccounts(params).then((data: v2.GCPSTSServiceAccountsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
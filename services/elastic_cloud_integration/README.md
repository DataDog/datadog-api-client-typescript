# @datadog/datadog-api-client-elastic-cloud-integration

## Description

Manage your Datadog Elastic Cloud integration accounts and account resources
directly through the Datadog API. See the
[Elastic Cloud integration page](https://docs.datadoghq.com/integrations/elastic-cloud/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-elastic-cloud-integration
# Yarn
yarn add @datadog/datadog-api-client-elastic-cloud-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ElasticCloudIntegrationApiV2 } from "@datadog/datadog-api-client-elastic-cloud-integration";
import { v2 } from "@datadog/datadog-api-client-elastic-cloud-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ElasticCloudIntegrationApi.v2.listElasticCloudIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ElasticCloudIntegrationApiV2(configuration);

apiInstance.listElasticCloudIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
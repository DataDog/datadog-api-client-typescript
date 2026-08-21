# @datadog/datadog-api-client-elastic-cloud-integration-accounts

## Description

Manage your Datadog Elastic Cloud integration accounts directly through the Datadog API.
Create, update, and delete accounts, configure authentication and settings, and
enable or disable dataflows such as cluster metrics, index stats, shard stats,
pending tasks, and snapshot lifecycle management stats. See the
[Elastic Cloud integration page](https://docs.datadoghq.com/integrations/elastic-cloud/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-elastic-cloud-integration-accounts
# Yarn
yarn add @datadog/datadog-api-client-elastic-cloud-integration-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ElasticCloudIntegrationAccountsApiV2 } from "@datadog/datadog-api-client-elastic-cloud-integration-accounts";
import { v2 } from "@datadog/datadog-api-client-elastic-cloud-integration-accounts";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ElasticCloudIntegrationAccountsApi.v2.listElasticCloudIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ElasticCloudIntegrationAccountsApiV2(configuration);

apiInstance.listElasticCloudIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-core-weave-integration

## Description

Manage your Datadog CoreWeave integration accounts and account resources
directly through the Datadog API. See the
[CoreWeave integration page](https://docs.datadoghq.com/integrations/coreweave/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core-weave-integration
# Yarn
yarn add @datadog/datadog-api-client-core-weave-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CoreWeaveIntegrationApiV2 } from "@datadog/datadog-api-client-core-weave-integration";
import { v2 } from "@datadog/datadog-api-client-core-weave-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CoreWeaveIntegrationApi.v2.listCoreWeaveCloudIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CoreWeaveIntegrationApiV2(configuration);

apiInstance.listCoreWeaveCloudIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
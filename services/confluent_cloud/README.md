# @datadog/datadog-api-client-confluent-cloud

## Description

Manage your Datadog Confluent Cloud integration accounts and account resources directly through the Datadog API. See the [Confluent Cloud page](https://docs.datadoghq.com/integrations/confluent_cloud/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-confluent-cloud
# Yarn
yarn add @datadog/datadog-api-client-confluent-cloud
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ConfluentCloudApiV2 } from "@datadog/datadog-api-client-confluent-cloud";
import { v2 } from "@datadog/datadog-api-client-confluent-cloud";

const configuration = createConfiguration();
const apiInstance = new ConfluentCloudApiV2(configuration);

apiInstance.listConfluentAccount(params).then((data: v2.ConfluentAccountsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
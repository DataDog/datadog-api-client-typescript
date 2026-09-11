# @datadog/datadog-api-client-snowflake-integration

## Description

Manage your Datadog Snowflake integration accounts and account resources directly
through the Datadog API. See the
[Snowflake integration page](https://docs.datadoghq.com/integrations/snowflake_web/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-snowflake-integration
# Yarn
yarn add @datadog/datadog-api-client-snowflake-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SnowflakeIntegrationApiV2 } from "@datadog/datadog-api-client-snowflake-integration";
import { v2 } from "@datadog/datadog-api-client-snowflake-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "SnowflakeIntegrationApi.v2.listSnowflakeIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new SnowflakeIntegrationApiV2(configuration);

apiInstance.listSnowflakeIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
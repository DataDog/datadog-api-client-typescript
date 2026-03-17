# @datadog/datadog-api-client-integration-accounts

## Description

Configure and manage third-party integrations with Datadog. This API provides a unified
interface for managing integration accounts across various external services.

Each integration has its own unique schema that defines the required settings and secrets.
Before creating or updating an account, use the schema endpoint to retrieve the specific
requirements, field types, validation rules, and available configuration options for your
integration.

**Note**: This API manages integration account configurations only. It does not support
Grace Resources, Reference Tables, or Custom Queries CRUD operations. For those features,
refer to each integration's dedicated documentation.

Supported Integrations:
  - [Twilio](https://docs.datadoghq.com/integrations/twilio/)
  - [Snowflake](https://docs.datadoghq.com/integrations/snowflake-web/)
  - [Databricks](https://docs.datadoghq.com/integrations/databricks/)

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-integration-accounts
# Yarn
yarn add @datadog/datadog-api-client-integration-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IntegrationAccountsApiV2 } from "@datadog/datadog-api-client-integration-accounts";
import { v2 } from "@datadog/datadog-api-client-integration-accounts";

const configuration = createConfiguration();
const apiInstance = new IntegrationAccountsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listWebIntegrationAccounts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
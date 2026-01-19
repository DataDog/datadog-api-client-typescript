# @datadog/datadog-api-client-web-integrations

## Description

Configure and manage third-party web integrations with Datadog. This API provides a unified
interface for managing integration accounts across various external services.

Each integration has its own unique schema that defines the required settings and secrets.
Before creating or updating an account, use the schema endpoint to retrieve the specific
requirements, field types, validation rules, and available configuration options for your
integration.

Supported Integrations:
  - twilio
  - snowflake-web
  - databricks

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-web-integrations
# Yarn
yarn add @datadog/datadog-api-client-web-integrations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { WebIntegrationsApiV2 } from "@datadog/datadog-api-client-web-integrations";
import { v2 } from "@datadog/datadog-api-client-web-integrations";

const configuration = createConfiguration();
const apiInstance = new WebIntegrationsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listWebIntegrationAccounts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
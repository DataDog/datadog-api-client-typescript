# @datadog/datadog-api-client-auth-n-mappings

## Description

[The AuthN Mappings API](https://docs.datadoghq.com/account_management/authn_mapping/?tab=example)
is used to automatically map groups of users to roles in Datadog using attributes
sent from Identity Providers. Use these endpoints to manage your AuthN Mappings.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-auth-n-mappings
# Yarn
yarn add @datadog/datadog-api-client-auth-n-mappings
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AuthNMappingsApiV2 } from "@datadog/datadog-api-client-auth-n-mappings";

const configuration = createConfiguration();
const apiInstance = new AuthNMappingsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listAuthNMappings(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
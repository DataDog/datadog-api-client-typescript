# @datadog/datadog-api-client-key-management

## Description

Manage your Datadog API and application keys. You need an API key and
an application key for a user with the required permissions to interact
with these endpoints. The full list of API and application keys can be
seen on your [Datadog API page](https://app.datadoghq.com/account/settings#api).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-key-management
# Yarn
yarn add @datadog/datadog-api-client-key-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { KeyManagementApiV2 } from "@datadog/datadog-api-client-key-management";

const configuration = createConfiguration();
const apiInstance = new KeyManagementApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listAPIKeys(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
# @datadog/datadog-api-client-service-accounts

## Description

Create, edit, and disable service accounts. See the [Service Accounts page](https://docs.datadoghq.com/account_management/org_settings/service_accounts/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-accounts
# Yarn
yarn add @datadog/datadog-api-client-service-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceAccountsApiV2 } from "@datadog/datadog-api-client-service-accounts";

const configuration = createConfiguration();
const apiInstance = new ServiceAccountsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.createServiceAccount(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
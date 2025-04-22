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
import { v2 } from "@datadog/datadog-api-client-service-accounts";

const configuration = createConfiguration();
const apiInstance = new ServiceAccountsApiV2(configuration);
const params = {/* parameters */};

apiInstance.createServiceAccount(params).then((data: v2.UserResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
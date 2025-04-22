# @datadog/datadog-api-client-api-management

## Description

Configure your API endpoints through the Datadog API.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-api-management
# Yarn
yarn add @datadog/datadog-api-client-api-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { APIManagementApiV2 } from "@datadog/datadog-api-client-api-management";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listAPIs"] = true;
const apiInstance = new APIManagementApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listAPIs(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
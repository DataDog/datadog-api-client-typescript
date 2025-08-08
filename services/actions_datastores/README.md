# @datadog/datadog-api-client-actions-datastores

## Description

Leverage the Actions Datastore API to create, modify, and delete
items in datastores owned by your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-actions-datastores
# Yarn
yarn add @datadog/datadog-api-client-actions-datastores
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ActionsDatastoresApiV2 } from "@datadog/datadog-api-client-actions-datastores";
import { v2 } from "@datadog/datadog-api-client-actions-datastores";

const configuration = createConfiguration();
const apiInstance = new ActionsDatastoresApiV2(configuration);

apiInstance.listDatastores().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
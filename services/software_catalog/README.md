# @datadog/datadog-api-client-software-catalog

## Description

API to create, update, retrieve, and delete Software Catalog entities.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-software-catalog
# Yarn
yarn add @datadog/datadog-api-client-software-catalog
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SoftwareCatalogApiV2 } from "@datadog/datadog-api-client-software-catalog";
import { v2 } from "@datadog/datadog-api-client-software-catalog";

const configuration = createConfiguration();
const apiInstance = new SoftwareCatalogApiV2(configuration);
const params = {/* parameters */};

apiInstance.listCatalogEntity(params).then((data: v2.ListEntityCatalogResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
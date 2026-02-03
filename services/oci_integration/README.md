# @datadog/datadog-api-client-oci-integration

## Description

Auto-generated tag OCI Integration

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-oci-integration
# Yarn
yarn add @datadog/datadog-api-client-oci-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OCIIntegrationApiV2 } from "@datadog/datadog-api-client-oci-integration";
import { v2 } from "@datadog/datadog-api-client-oci-integration";

const configuration = createConfiguration();
const apiInstance = new OCIIntegrationApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTenancyProducts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
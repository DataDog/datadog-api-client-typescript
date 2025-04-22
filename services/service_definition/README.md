# @datadog/datadog-api-client-service-definition

## Description

API to create, update, retrieve and delete service definitions.
Note: Service Catalog [v3.0 schema](https://docs.datadoghq.com/service_catalog/service_definitions/v3-0/) has new API endpoints documented under [Software Catalog](https://docs.datadoghq.com/api/latest/software-catalog/). Use the following Service Definition endpoints for v2.2 and earlier.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-definition
# Yarn
yarn add @datadog/datadog-api-client-service-definition
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceDefinitionApiV2 } from "@datadog/datadog-api-client-service-definition";

const configuration = createConfiguration();
const apiInstance = new ServiceDefinitionApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listServiceDefinitions(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
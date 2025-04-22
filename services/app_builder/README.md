# @datadog/datadog-api-client-app-builder

## Description

Datadog App Builder provides a low-code solution to rapidly develop and integrate secure, customized applications into your monitoring stack that are built to accelerate remediation at scale. These API endpoints allow you to create, read, update, delete, and publish apps.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-app-builder
# Yarn
yarn add @datadog/datadog-api-client-app-builder
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AppBuilderApiV2 } from "@datadog/datadog-api-client-app-builder";

const configuration = createConfiguration();
const apiInstance = new AppBuilderApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listApps(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
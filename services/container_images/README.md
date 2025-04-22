# @datadog/datadog-api-client-container-images

## Description

The Container Images API allows you to query Container Image data for your organization. See the [Container Images View page](https://docs.datadoghq.com/infrastructure/containers/container_images/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-container-images
# Yarn
yarn add @datadog/datadog-api-client-container-images
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ContainerImagesApiV2 } from "@datadog/datadog-api-client-container-images";

const configuration = createConfiguration();
const apiInstance = new ContainerImagesApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listContainerImages(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
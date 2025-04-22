# @datadog/datadog-api-client-ci-visibility-pipelines

## Description

Search or aggregate your CI Visibility pipeline events and send them to your Datadog site over HTTP. See the [CI Pipeline Visibility in Datadog page](https://docs.datadoghq.com/continuous_integration/pipelines/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ci-visibility-pipelines
# Yarn
yarn add @datadog/datadog-api-client-ci-visibility-pipelines
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CIVisibilityPipelinesApiV2 } from "@datadog/datadog-api-client-ci-visibility-pipelines";

const configuration = createConfiguration();
const apiInstance = new CIVisibilityPipelinesApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.createCIAppPipelineEvent(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
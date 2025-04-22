# @datadog/datadog-api-client-ci-visibility-tests

## Description

Search or aggregate your CI Visibility test events over HTTP. See the [Test Visibility in Datadog page](https://docs.datadoghq.com/tests/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ci-visibility-tests
# Yarn
yarn add @datadog/datadog-api-client-ci-visibility-tests
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CIVisibilityTestsApiV2 } from "@datadog/datadog-api-client-ci-visibility-tests";

const configuration = createConfiguration();
const apiInstance = new CIVisibilityTestsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.aggregateCIAppTestEvents(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
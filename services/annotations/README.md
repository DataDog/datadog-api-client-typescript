# @datadog/datadog-api-client-annotations

## Description

Add annotations to dashboards and notebooks to mark events such as deployments, incidents, or other notable moments in time.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-annotations
# Yarn
yarn add @datadog/datadog-api-client-annotations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AnnotationsApiV2 } from "@datadog/datadog-api-client-annotations";
import { v2 } from "@datadog/datadog-api-client-annotations";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "AnnotationsApi.v2.listAnnotations": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new AnnotationsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listAnnotations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
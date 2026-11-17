# Code Security

`@datadog/datadog-api-client-code-security`

## Description

Static analysis rulesets and analysis server.

Products: Code Security

API for static analysis

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-code-security
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-code-security
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-code-security";

const configuration = createConfiguration();
configuration.unstableOperations["v2.createSCAResult"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);
const params = {/* parameters */};

apiInstance.createSCAResult(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-forms

## Description

Create and manage forms for collecting data from users.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-forms
# Yarn
yarn add @datadog/datadog-api-client-forms
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { FormsApiV2 } from "@datadog/datadog-api-client-forms";
import { v2 } from "@datadog/datadog-api-client-forms";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "FormsApi.v2.listForms": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new FormsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listForms(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
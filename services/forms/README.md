# @datadog/datadog-api-client-forms

## Description

The Datadog Forms API lets you create and manage forms within the App Builder platform.
You can configure form settings, manage versions, and publish forms.

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

apiInstance.listForms().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
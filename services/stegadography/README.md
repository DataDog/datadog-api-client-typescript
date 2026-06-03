# @datadog/datadog-api-client-stegadography

## Description

Extract watermarks embedded in dashboard screenshots to retrieve cached widget state.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-stegadography
# Yarn
yarn add @datadog/datadog-api-client-stegadography
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { StegadographyApiV2 } from "@datadog/datadog-api-client-stegadography";
import { v2 } from "@datadog/datadog-api-client-stegadography";

const configuration = createConfiguration();
const apiInstance = new StegadographyApiV2(configuration);
const params = {/* parameters */};

apiInstance.getStegadographyWidgets(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
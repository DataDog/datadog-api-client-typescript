# @datadog/datadog-api-client-widgets

## Description

Manage widgets for experience types such as CCM cost reports.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-widgets
# Yarn
yarn add @datadog/datadog-api-client-widgets
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { WidgetsApiV2 } from "@datadog/datadog-api-client-widgets";
import { v2 } from "@datadog/datadog-api-client-widgets";

const configuration = createConfiguration();
const apiInstance = new WidgetsApiV2(configuration);
const params = {/* parameters */};

apiInstance.searchWidgetsApiV2WidgetsExperienceTypeGet(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
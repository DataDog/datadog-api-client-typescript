# @datadog/datadog-api-client-widgets

## Description

Create, read, update, and delete saved widgets. Widgets are reusable
visualization components stored independently from any dashboard or notebook,
partitioned by experience type and identified by a UUID.

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

apiInstance.searchWidgets(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
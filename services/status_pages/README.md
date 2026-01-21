# @datadog/datadog-api-client-status-pages

## Description

Manage your status pages and communicate service disruptions to stakeholders via Datadog's API. See the [Status Pages documentation](https://docs.datadoghq.com/incident_response/status_pages/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-status-pages
# Yarn
yarn add @datadog/datadog-api-client-status-pages
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { StatusPagesApiV2 } from "@datadog/datadog-api-client-status-pages";
import { v2 } from "@datadog/datadog-api-client-status-pages";

const configuration = createConfiguration();
const apiInstance = new StatusPagesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listStatusPages(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# Status Pages

`@datadog/datadog-api-client-status-pages`

## Description

Status pages, components, degradations, maintenances, their templates and email access policies.

Products: Incident Response

Manage your status pages and communicate service disruptions to stakeholders via Datadog's API. See the [Status Pages documentation](https://docs.datadoghq.com/incident_response/status_pages/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-status-pages
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-status-pages
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-status-pages";

const configuration = createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);
const params = {/* parameters */};

apiInstance.listStatusPages(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
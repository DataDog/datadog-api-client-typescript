# @datadog/datadog-api-client-seats

## Description

The seats API allows you to view, assign, and unassign seats for your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-seats
# Yarn
yarn add @datadog/datadog-api-client-seats
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SeatsApiV2 } from "@datadog/datadog-api-client-seats";
import { v2 } from "@datadog/datadog-api-client-seats";

const configuration = createConfiguration();
const apiInstance = new SeatsApiV2(configuration);
const params = {/* parameters */};

apiInstance.getSeatsUsersV2(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
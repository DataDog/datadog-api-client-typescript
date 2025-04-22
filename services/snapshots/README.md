# @datadog/datadog-api-client-snapshots

## Description

Take graph snapshots using the API.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-snapshots
# Yarn
yarn add @datadog/datadog-api-client-snapshots
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SnapshotsApiV1 } from "@datadog/datadog-api-client-snapshots";
import { v1 } from "@datadog/datadog-api-client-snapshots";

const configuration = createConfiguration();
const apiInstance = new SnapshotsApiV1(configuration);
const params = {/* parameters */};

apiInstance.getGraphSnapshot(params).then((data: v1.GraphSnapshot) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
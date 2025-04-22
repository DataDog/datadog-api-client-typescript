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

const configuration = createConfiguration();
const apiInstance = new SnapshotsApiV1(configuration);
const params = {/* parameters */};

const result = await apiInstance.getGraphSnapshot(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
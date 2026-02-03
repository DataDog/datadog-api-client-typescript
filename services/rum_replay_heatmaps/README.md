# @datadog/datadog-api-client-rum-replay-heatmaps

## Description

Manage heatmap snapshots for RUM replay sessions. Create, update, delete, and retrieve snapshots to visualize user interactions on specific views.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-replay-heatmaps
# Yarn
yarn add @datadog/datadog-api-client-rum-replay-heatmaps
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumReplayHeatmapsApiV2 } from "@datadog/datadog-api-client-rum-replay-heatmaps";
import { v2 } from "@datadog/datadog-api-client-rum-replay-heatmaps";

const configuration = createConfiguration();
const apiInstance = new RumReplayHeatmapsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listReplayHeatmapSnapshots(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
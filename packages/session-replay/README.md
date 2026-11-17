# Session Replay

`@datadog/datadog-api-client-session-replay`

## Description

Replay sessions, playlists, heatmaps and viewership.

Products: Session Replay

Manage heatmap snapshots for RUM replay sessions. Create, update, delete, and retrieve snapshots to visualize user interactions on specific views.

Create and manage playlists of RUM replay sessions. Organize, categorize, and share collections of replay sessions for analysis and collaboration.

Retrieve segments for RUM replay sessions.
Access session replay data stored in event platform or blob storage.

Track and manage RUM replay session viewership. Monitor who watches replay sessions and maintain watch history for audit and analytics purposes.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-session-replay
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-session-replay
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-session-replay";

const configuration = createConfiguration();
const apiInstance = new v2.RumReplayHeatmapsApi(configuration);
const params = {/* parameters */};

apiInstance.listReplayHeatmapSnapshots(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-rum-replay-playlists

## Description

Create and manage playlists of RUM replay sessions. Organize, categorize, and share collections of replay sessions for analysis and collaboration.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-replay-playlists
# Yarn
yarn add @datadog/datadog-api-client-rum-replay-playlists
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumReplayPlaylistsApiV2 } from "@datadog/datadog-api-client-rum-replay-playlists";
import { v2 } from "@datadog/datadog-api-client-rum-replay-playlists";

const configuration = createConfiguration();
const apiInstance = new RumReplayPlaylistsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listRumReplayPlaylists(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
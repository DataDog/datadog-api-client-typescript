# @datadog/datadog-api-client-rum-replay-sessions

## Description

Retrieve segments for RUM replay sessions. Access session replay data stored in event platform or blob storage.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-replay-sessions
# Yarn
yarn add @datadog/datadog-api-client-rum-replay-sessions
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumReplaySessionsApiV2 } from "@datadog/datadog-api-client-rum-replay-sessions";

const configuration = createConfiguration();
const apiInstance = new RumReplaySessionsApiV2(configuration);
const params = {/* parameters */};

apiInstance.getSegments(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
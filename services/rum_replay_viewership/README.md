# @datadog/datadog-api-client-rum-replay-viewership

## Description

Track and manage RUM replay session viewership. Monitor who watches replay sessions and maintain watch history for audit and analytics purposes.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-replay-viewership
# Yarn
yarn add @datadog/datadog-api-client-rum-replay-viewership
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RumReplayViewershipApiV2 } from "@datadog/datadog-api-client-rum-replay-viewership";
import { v2 } from "@datadog/datadog-api-client-rum-replay-viewership";

const configuration = createConfiguration();
const apiInstance = new RumReplayViewershipApiV2(configuration);
const params = {/* parameters */};

apiInstance.listRumReplaySessionWatchers(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
# @datadog/datadog-api-client-ai-impact

## Description

Send AI coding tool usage data to measure the impact of AI tools on software delivery.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ai-impact
# Yarn
yarn add @datadog/datadog-api-client-ai-impact
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AIImpactApiV2 } from "@datadog/datadog-api-client-ai-impact";

const configuration = createConfiguration();
const apiInstance = new AIImpactApiV2(configuration);
const params = {/* parameters */};

apiInstance.createAIImpactUserActivity(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
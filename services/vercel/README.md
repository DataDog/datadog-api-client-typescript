# @datadog/datadog-api-client-vercel

## Description

Configure the Datadog Vercel integration. Endpoints in this section let you exchange a Vercel marketplace authorization code for a Datadog-managed access token and read or update the logs, traces, and API key configuration associated with a Vercel project.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-vercel
# Yarn
yarn add @datadog/datadog-api-client-vercel
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { VercelApiV2 } from "@datadog/datadog-api-client-vercel";
import { v2 } from "@datadog/datadog-api-client-vercel";

const configuration = createConfiguration();
const apiInstance = new VercelApiV2(configuration);
const params = {/* parameters */};

apiInstance.getVercelConfig(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
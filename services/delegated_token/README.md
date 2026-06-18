# @datadog/datadog-api-client-delegated-token

## Description

Exchange a cloud-provider identity proof or Datadog credential for a short-lived delegated-user JWT
via Workload Identity Federation.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-delegated-token
# Yarn
yarn add @datadog/datadog-api-client-delegated-token
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DelegatedTokenApiV2 } from "@datadog/datadog-api-client-delegated-token";
import { v2 } from "@datadog/datadog-api-client-delegated-token";

const configuration = createConfiguration();
const apiInstance = new DelegatedTokenApiV2(configuration);

apiInstance.getDelegatedToken().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
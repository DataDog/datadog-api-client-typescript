# @datadog/datadog-api-client-identity-providers

## Description

Manage identity providers and user authentication method overrides.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-identity-providers
# Yarn
yarn add @datadog/datadog-api-client-identity-providers
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IdentityProvidersApiV2 } from "@datadog/datadog-api-client-identity-providers";
import { v2 } from "@datadog/datadog-api-client-identity-providers";

const configuration = createConfiguration();
const apiInstance = new IdentityProvidersApiV2(configuration);

apiInstance.listIdentityProviders().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
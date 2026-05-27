# @datadog/datadog-api-client-o-auth2-client-public

## Description

Configure OAuth2 clients for Datadog.
Supports RFC 7591 Dynamic Client Registration and management of OAuth2 client scopes restrictions.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-o-auth2-client-public
# Yarn
yarn add @datadog/datadog-api-client-o-auth2-client-public
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OAuth2ClientPublicApiV2 } from "@datadog/datadog-api-client-o-auth2-client-public";
import { v2 } from "@datadog/datadog-api-client-o-auth2-client-public";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OAuth2ClientPublicApi.v2.getScopesRestriction": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OAuth2ClientPublicApiV2(configuration);
const params = {/* parameters */};

apiInstance.getScopesRestriction(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
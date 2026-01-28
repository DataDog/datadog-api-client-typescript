# @datadog/datadog-api-client-cloud-authentication

## Description

Configure AWS cloud authentication mappings for persona and intake authentication through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-cloud-authentication
# Yarn
yarn add @datadog/datadog-api-client-cloud-authentication
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CloudAuthenticationApiV2 } from "@datadog/datadog-api-client-cloud-authentication";
import { v2 } from "@datadog/datadog-api-client-cloud-authentication";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CloudAuthenticationApiV2(configuration);

apiInstance.listAWSCloudAuthPersonaMappings().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
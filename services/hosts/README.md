# @datadog/datadog-api-client-hosts

## Description

Get information about your infrastructure hosts in Datadog, and mute or unmute any notifications from your hosts. See the [Infrastructure page](https://docs.datadoghq.com/infrastructure/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-hosts
# Yarn
yarn add @datadog/datadog-api-client-hosts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { HostsApiV1 } from "@datadog/datadog-api-client-hosts";
import { v1 } from "@datadog/datadog-api-client-hosts";

const configuration = createConfiguration();
const apiInstance = new HostsApiV1(configuration);
const params = {/* parameters */};

apiInstance.muteHost(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
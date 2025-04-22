# @datadog/datadog-api-client-monitors

## Description

[Monitors](https://docs.datadoghq.com/monitors) allow you to watch a metric or check that you care about and
notifies your team when a defined threshold has exceeded.

For more information, see [Creating Monitors](https://docs.datadoghq.com/monitors/create/types/) and
[Tag Policies](https://docs.datadoghq.com/monitors/settings/).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-monitors
# Yarn
yarn add @datadog/datadog-api-client-monitors
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { MonitorsApiV2 } from "@datadog/datadog-api-client-monitors";

const configuration = createConfiguration();
configuration.unstableOperations["v2.getMonitorNotificationRules"] = true;
const apiInstance = new MonitorsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.getMonitorNotificationRules(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```
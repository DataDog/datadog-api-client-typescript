# Monitors

`@datadog/datadog-api-client-monitors`

## Description

Monitors, monitor settings and downtimes.

Products: Monitors

**Note**: Downtime V2 is currently in private beta. To request access, contact [Datadog support](https://docs.datadoghq.com/help/).

[Downtiming](https://docs.datadoghq.com/monitors/notify/downtimes) gives
you greater control over monitor notifications by allowing you to globally exclude
scopes from alerting. Downtime settings, which can be scheduled with start and
end times, prevent all alerting related to specified Datadog tags.

[Monitors](https://docs.datadoghq.com/monitors) allow you to watch a metric or check that you care about and
notifies your team when a defined threshold has exceeded.

For more information, see [Creating Monitors](https://docs.datadoghq.com/monitors/create/types/) and
[Tag Policies](https://docs.datadoghq.com/monitors/settings/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-monitors
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-monitors
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-monitors";

const configuration = createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);
const params = {/* parameters */};

apiInstance.listDowntimes(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
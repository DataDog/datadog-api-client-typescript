# @datadog/datadog-api-client-downtimes

## Description

**Note**: Downtime V2 is currently in private beta. To request access, contact [Datadog support](https://docs.datadoghq.com/help/).

[Downtiming](https://docs.datadoghq.com/monitors/notify/downtimes) gives
you greater control over monitor notifications by allowing you to globally exclude
scopes from alerting. Downtime settings, which can be scheduled with start and
end times, prevent all alerting related to specified Datadog tags.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-downtimes
# Yarn
yarn add @datadog/datadog-api-client-downtimes
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DowntimesApiV2 } from "@datadog/datadog-api-client-downtimes";
import { v2 } from "@datadog/datadog-api-client-downtimes";

const configuration = createConfiguration();
const apiInstance = new DowntimesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listDowntimes(params).then((data: v2.ListDowntimesResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
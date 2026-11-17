# Event Management

`@datadog/datadog-api-client-events`

## Description

Event submission and search.

Products: Event Management

The Event Management API allows you to programmatically post events to the Events Explorer and fetch events from the Events Explorer. See the [Event Management page](https://docs.datadoghq.com/service_management/events/) for more information.

**Update to Datadog monitor events `aggregation_key` starting March 1, 2025:** The Datadog monitor events `aggregation_key` is unique to each Monitor ID. Starting March 1st, this key will also include Monitor Group, making it unique per *Monitor ID and Monitor Group*. If you're using monitor events `aggregation_key` in dashboard queries or the Event API, you must migrate to use `@monitor.id`. Reach out to [support](https://www.datadoghq.com/support/) if you have any question.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-events
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-events
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-events";

const configuration = createConfiguration();
const apiInstance = new v2.EventsApi(configuration);
const params = {/* parameters */};

apiInstance.listEvents(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
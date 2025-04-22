# @datadog/datadog-api-client-logs-custom-destinations

## Description

Custom Destinations forward all the logs ingested to an external destination.

**Note**: Log forwarding is not available for the Government (US1-FED) site. Contact your account representative for more information.

See the [Custom Destinations Page](https://app.datadoghq.com/logs/pipelines/log-forwarding/custom-destinations)
for a list of the custom destinations currently configured in web UI.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs-custom-destinations
# Yarn
yarn add @datadog/datadog-api-client-logs-custom-destinations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsCustomDestinationsApiV2 } from "@datadog/datadog-api-client-logs-custom-destinations";
import { v2 } from "@datadog/datadog-api-client-logs-custom-destinations";

const configuration = createConfiguration();
const apiInstance = new LogsCustomDestinationsApiV2(configuration);

apiInstance.listLogsCustomDestinations(params).then((data: v2.CustomDestinationsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
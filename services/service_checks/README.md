# @datadog/datadog-api-client-service-checks

## Description

The service check endpoint allows you to post check statuses for use with monitors.
Service check messages are limited to 500 characters. If a check is posted with a message
containing more than 500 characters, only the first 500 characters are displayed. Messages
are limited for checks with a Critical or Warning status, they are dropped for checks with
an OK status.

- [Read more about Service Check monitors][1].
- [Read more about Process Check monitors][2].
- [Read more about Network monitors][3].
- [Read more about Custom Check monitors][4].
- [Read more about Service Checks and status codes][5].

[1]: https://docs.datadoghq.com/monitors/types/service_check/
[2]: https://docs.datadoghq.com/monitors/create/types/process_check/?tab=checkalert
[3]: https://docs.datadoghq.com/monitors/create/types/network/?tab=checkalert
[4]: https://docs.datadoghq.com/monitors/create/types/custom_check/?tab=checkalert
[5]: https://docs.datadoghq.com/developers/service_checks/

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-checks
# Yarn
yarn add @datadog/datadog-api-client-service-checks
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceChecksApiV1 } from "@datadog/datadog-api-client-service-checks";
import { v1 } from "@datadog/datadog-api-client-service-checks";

const configuration = createConfiguration();
const apiInstance = new ServiceChecksApiV1(configuration);
const params = {/* parameters */};

apiInstance.submitServiceCheck(params).then((data: v1.IntakePayloadAccepted) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
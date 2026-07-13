# @datadog/datadog-api-client-report-schedules

## Description

Create and manage scheduled reports. A scheduled report renders a dashboard or integration
dashboard on a recurring cadence and delivers it to a set of recipients over email, Slack,
or Microsoft Teams.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-report-schedules
# Yarn
yarn add @datadog/datadog-api-client-report-schedules
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ReportSchedulesApiV2 } from "@datadog/datadog-api-client-report-schedules";
import { v2 } from "@datadog/datadog-api-client-report-schedules";

const configuration = createConfiguration();
const apiInstance = new ReportSchedulesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listDatasetReportSchedules(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
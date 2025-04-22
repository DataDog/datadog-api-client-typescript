# @datadog/datadog-api-client-service-level-objective-corrections

## Description

SLO Status Corrections allow you to prevent specific time periods from negatively impacting
your SLO’s status and error budget. You can use Status Corrections for various purposes, such
as removing planned maintenance windows, non-business hours, or other time periods that do
not correspond to genuine issues. See [SLO status corrections](https://docs.datadoghq.com/service_management/service_level_objectives/#slo-status-corrections) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-level-objective-corrections
# Yarn
yarn add @datadog/datadog-api-client-service-level-objective-corrections
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceLevelObjectiveCorrectionsApiV1 } from "@datadog/datadog-api-client-service-level-objective-corrections";
import { v1 } from "@datadog/datadog-api-client-service-level-objective-corrections";

const configuration = createConfiguration();
const apiInstance = new ServiceLevelObjectiveCorrectionsApiV1(configuration);
const params = {/* parameters */};

apiInstance.listSLOCorrection(params).then((data: v1.SLOCorrectionListResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```
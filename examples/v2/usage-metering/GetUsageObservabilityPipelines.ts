/**
 * Get hourly usage for Observability Pipelines returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsageMeteringApi(configuration);

const params: v2.UsageMeteringApiGetUsageObservabilityPipelinesRequest = {
  startHr: new Date(new Date().getTime() / 1000 + -5 * 86400),
  endHr: new Date(new Date().getTime() / 1000 + -3 * 86400),
};

apiInstance
  .getUsageObservabilityPipelines(params)
  .then((data: v2.UsageObservabilityPipelinesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get hourly usage for Lambda returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetUsageLambdaRequest = {
  startHr: new Date(2021, 11, 11, 11, 11, 11, 111000),
};

apiInstance
  .getUsageLambda(params)
  .then((data: v1.UsageLambdaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

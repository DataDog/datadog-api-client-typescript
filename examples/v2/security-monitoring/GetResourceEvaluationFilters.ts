/**
 * List resource filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetResourceEvaluationFiltersRequest = {
  cloudProvider: "aws",
  accountId: "123456789",
};

apiInstance
  .getResourceEvaluationFilters(params)
  .then((data: v2.GetResourceEvaluationFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

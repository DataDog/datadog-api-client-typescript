/**
 * Update resource filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateResourceEvaluationFiltersRequest = {
  body: {
    data: {
      attributes: {
        cloudProvider: {
          aws: {
            aws_account_id: ["tag1:v1"],
          },
        },
      },
      id: "csm_resource_filter",
      type: "csm_resource_filter",
    },
  },
};

apiInstance
  .updateResourceEvaluationFilters(params)
  .then((data: v2.UpdateResourceEvaluationFiltersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

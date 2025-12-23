/**
 * Get a list of deployment events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiListDORADeploymentsRequest = {
  body: {
    data: {
      attributes: {
        from: new Date(2025, 3, 23, 0, 0, 0, 0),
        limit: 1,
        to: new Date(2025, 3, 24, 0, 0, 0, 0),
      },
      type: "dora_deployments_list_request",
    },
  },
};

apiInstance
  .listDORADeployments(params)
  .then((data: v2.DORADeploymentsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

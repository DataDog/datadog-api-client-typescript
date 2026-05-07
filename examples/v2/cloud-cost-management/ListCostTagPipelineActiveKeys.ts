/**
 * List active tag pipeline keys returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCostTagPipelineActiveKeys"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

apiInstance
  .listCostTagPipelineActiveKeys()
  .then((data: v2.CostTagPipelineActiveKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * List Cloud Cost Management GCP Usage Cost configs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

apiInstance
  .listCostGCPUsageCostConfigs()
  .then((data: v2.GCPUsageCostConfigsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

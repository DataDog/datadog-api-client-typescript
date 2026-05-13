/**
 * List Cloud Cost Management tags returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

apiInstance
  .listCostTags()
  .then((data: v2.CostTagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Generate a Cloud Cost Management tag description returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGenerateCostTagDescriptionByKeyRequest =
  {
    tagKey: "tag_key",
  };

apiInstance
  .generateCostTagDescriptionByKey(params)
  .then((data: v2.GenerateCostTagDescriptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

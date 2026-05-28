/**
 * Upsert a Cloud Cost Management tag description returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpsertCostTagDescriptionByKeyRequest = {
  body: {
    data: {
      attributes: {
        cloud: "aws",
        description: "AWS account that owns this cost.",
      },
      id: "account_id",
      type: "cost_tag_description",
    },
  },
  tagKey: "tag_key",
};

apiInstance
  .upsertCostTagDescriptionByKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

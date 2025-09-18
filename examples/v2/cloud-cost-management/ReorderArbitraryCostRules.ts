/**
 * Reorder arbitrary cost rules returns "Successfully reordered rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiReorderArbitraryCostRulesRequest = {
  body: {
    data: [
      {
        id: "456",
        type: "arbitrary_rule",
      },
      {
        id: "123",
        type: "arbitrary_rule",
      },
      {
        id: "789",
        type: "arbitrary_rule",
      },
    ],
  },
};

apiInstance
  .reorderArbitraryCostRules(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

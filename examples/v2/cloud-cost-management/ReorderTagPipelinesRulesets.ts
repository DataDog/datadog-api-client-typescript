/**
 * Reorder tag pipeline rulesets returns "Successfully reordered rulesets" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiReorderTagPipelinesRulesetsRequest = {
  body: {
    data: [
      {
        id: "55ef2385-9ae1-4410-90c4-5ac1b60fec10",
        type: "ruleset",
      },
      {
        id: "a7b8c9d0-1234-5678-9abc-def012345678",
        type: "ruleset",
      },
      {
        id: "f1e2d3c4-b5a6-9780-1234-567890abcdef",
        type: "ruleset",
      },
    ],
  },
};

apiInstance
  .reorderTagPipelinesRulesets(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

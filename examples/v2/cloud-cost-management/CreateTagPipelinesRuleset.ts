/**
 * Create tag pipeline ruleset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateTagPipelinesRulesetRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        rules: [
          {
            enabled: true,
            mapping: undefined,
            name: "Add Cost Center Tag",
            query: {
              addition: {
                key: "cost_center",
                value: "engineering",
              },
              caseInsensitivity: false,
              ifNotExists: true,
              query: `account_id:"123456789" AND service:"web-api"`,
            },
            referenceTable: undefined,
          },
        ],
      },
      id: "New Ruleset",
      type: "create_ruleset",
    },
  },
};

apiInstance
  .createTagPipelinesRuleset(params)
  .then((data: v2.RulesetResp) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

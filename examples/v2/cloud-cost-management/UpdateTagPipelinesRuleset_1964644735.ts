/**
 * Update tag pipeline ruleset with if_tag_exists returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateTagPipelinesRulesetRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        lastVersion: 3611102,
        rules: [
          {
            enabled: true,
            mapping: {
              destinationKey: "team_owner",
              ifTagExists: "replace",
              sourceKeys: ["account_name", "account_id"],
            },
            name: "Account Name Mapping",
            query: undefined,
            referenceTable: undefined,
          },
        ],
      },
      id: "New Ruleset",
      type: "update_ruleset",
    },
  },
  rulesetId: "ee10c3ff-312f-464c-b4f6-46adaa6d00a1",
};

apiInstance
  .updateTagPipelinesRuleset(params)
  .then((data: v2.RulesetResp) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

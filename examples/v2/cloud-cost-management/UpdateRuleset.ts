/**
 * Update ruleset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateRulesetRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        lastVersion: 3601919,
        rules: [
          {
            enabled: true,
            mapping: {
              destinationKey: "team_owner",
              ifNotExists: true,
              sourceKeys: ["account_name", "account_id"],
            },
            name: "Account Name Mapping",
            query: undefined,
            referenceTable: undefined,
          },
        ],
      },
      type: "update_ruleset",
    },
  },
  rulesetId: "1c5dae14-237d-4b9a-a515-aa55b3939142",
};

apiInstance
  .updateRuleset(params)
  .then((data: v2.RulesetResp) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

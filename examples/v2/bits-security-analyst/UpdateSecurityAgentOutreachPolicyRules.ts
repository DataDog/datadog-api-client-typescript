/**
 * Update outreach policy rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateSecurityAgentOutreachPolicyRules"] =
  true;
const apiInstance = new v2.BitsSecurityAnalystApi(configuration);

const params: v2.BitsSecurityAnalystApiUpdateSecurityAgentOutreachPolicyRulesRequest =
  {
    body: {
      data: {
        attributes: {
          rules: [
            {
              isEnabled: true,
              ruleId: "abc-def-ghi",
            },
          ],
        },
        type: "outreach_policy_rules_update",
      },
    },
  };

apiInstance
  .updateSecurityAgentOutreachPolicyRules(params)
  .then((data: v2.SecurityAgentOutreachPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

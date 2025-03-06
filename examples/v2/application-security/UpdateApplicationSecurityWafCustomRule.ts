/**
 * Update a WAF Custom Rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

// there is a valid "custom_rule" in the system
const CUSTOM_RULE_DATA_ID = process.env.CUSTOM_RULE_DATA_ID as string;

const params: v2.ApplicationSecurityApiUpdateApplicationSecurityWafCustomRuleRequest =
  {
    body: {
      data: {
        type: "custom_rule",
        attributes: {
          blocking: false,
          conditions: [
            {
              operator: "match_regex",
              parameters: {
                inputs: [
                  {
                    address: "server.request.query",
                    keyPath: ["id"],
                  },
                ],
                regex: "badactor",
              },
            },
          ],
          enabled: false,
          name: "test",
          pathGlob: "/test",
          scope: [
            {
              env: "test",
              service: "test",
            },
          ],
          tags: {
            category: "attack_attempt",
            type: "test",
          },
        },
      },
    },
    customRuleId: CUSTOM_RULE_DATA_ID,
  };

apiInstance
  .updateApplicationSecurityWafCustomRule(params)
  .then((data: v2.ApplicationSecurityWafCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get a WAF custom rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiGetApplicationSecurityWafCustomRuleRequest =
  {
    customRuleId: "custom_rule_id",
  };

apiInstance
  .getApplicationSecurityWafCustomRule(params)
  .then((data: v2.ApplicationSecurityWafCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

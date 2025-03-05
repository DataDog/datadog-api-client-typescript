/**
 * Delete a WAF Custom Rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiDeleteApplicationSecurityWafCustomRuleRequest =
  {
    customRuleId: "custom_rule_id",
  };

apiInstance
  .deleteApplicationSecurityWafCustomRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

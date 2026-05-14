/**
 * Get the rule-based view of compliance findings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRuleBasedView"] = true;
const apiInstance = new v2.ComplianceApi(configuration);

const params: v2.ComplianceApiGetRuleBasedViewRequest = {
  to: 1739982278000,
};

apiInstance
  .getRuleBasedView(params)
  .then((data: v2.RuleBasedViewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

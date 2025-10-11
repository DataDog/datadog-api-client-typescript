/**
 * Ruleset get multiple returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listMultipleRulesets"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListMultipleRulesetsRequest = {
  body: {
    data: {
      attributes: {
        rulesets: [],
      },
      type: "get_multiple_rulesets_request",
    },
  },
};

apiInstance
  .listMultipleRulesets(params)
  .then((data: v2.GetMultipleRulesetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

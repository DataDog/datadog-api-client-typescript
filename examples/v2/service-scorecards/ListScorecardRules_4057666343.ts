/**
 * List all rules returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardRules"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiListScorecardRulesRequest = {
  pageSize: 2,
  filterRuleCustom: true,
  fieldsRule: "name",
};

(async () => {
  try {
    for await (const item of apiInstance.listScorecardRulesWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();

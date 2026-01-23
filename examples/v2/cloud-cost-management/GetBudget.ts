/**
 * Get budget returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetBudgetRequest = {
  budgetId: "budget_id",
};

apiInstance
  .getBudget(params)
  .then((data: v2.BudgetWithEntries) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

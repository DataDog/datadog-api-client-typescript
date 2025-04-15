/**
 * Update if exists, or create a new budget returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpsertBudgetRequest = {
  body: {
    data: {
      id: "1",
    },
  },
};

apiInstance
  .upsertBudget(params)
  .then((data: v2.BudgetWithEntries) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get a budget's custom forecast returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiGetCustomForecastRequest = {
  budgetId: "budget_id",
};

apiInstance
  .getCustomForecast(params)
  .then((data: v2.CustomForecastResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

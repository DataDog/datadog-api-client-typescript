/**
 * Create or replace a budget's custom forecast returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertCustomForecast"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpsertCustomForecastRequest = {
  body: {
    data: {
      attributes: {
        budgetUid: "00000000-0000-0000-0000-000000000001",
        entries: [
          {
            amount: 400,
            month: 202501,
            tagFilters: [
              {
                tagKey: "service",
                tagValue: "ec2",
              },
            ],
          },
        ],
      },
      id: "",
      type: "custom_forecast",
    },
  },
};

apiInstance
  .upsertCustomForecast(params)
  .then((data: v2.CustomForecastResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

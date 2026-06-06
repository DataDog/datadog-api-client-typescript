/**
 * Create or update a budget returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpsertBudgetRequest = {
  body: {
    data: {
      attributes: {
        costs: {
          actual: undefined,
          amount: undefined,
          forecast: undefined,
          ootbForecast: undefined,
        },
        costsUnit: {},
        createdAt: 1738258683590,
        createdBy: "00000000-0a0a-0a0a-aaa0-00000000000a",
        endMonth: 202502,
        entries: [
          {
            costs: {
              actual: undefined,
              amount: undefined,
              customForecast: undefined,
              forecast: undefined,
              ootbForecast: undefined,
            },
            tagFilters: [{}],
          },
        ],
        metricsQuery: "aws.cost.amortized{service:ec2} by {service}",
        name: "my budget",
        orgId: 123,
        startMonth: 202501,
        totalAmount: 1000,
        updatedAt: 1738258683590,
        updatedBy: "00000000-0a0a-0a0a-aaa0-00000000000a",
      },
      id: "00000000-0a0a-0a0a-aaa0-00000000000a",
      type: "",
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

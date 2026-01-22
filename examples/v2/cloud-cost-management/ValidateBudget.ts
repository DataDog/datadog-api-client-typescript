/**
 * Validate budget returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiValidateBudgetRequest = {
  body: {
    data: {
      attributes: {
        createdAt: 1738258683590,
        createdBy: "00000000-0a0a-0a0a-aaa0-00000000000a",
        endMonth: 202502,
        entries: [
          {
            amount: 500,
            month: 202501,
            tagFilters: [
              {
                tagKey: "service",
                tagValue: "ec2",
              },
            ],
          },
          {
            amount: 500,
            month: 202502,
            tagFilters: [
              {
                tagKey: "service",
                tagValue: "ec2",
              },
            ],
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
      id: "1",
      type: "budget",
    },
  },
};

apiInstance
  .validateBudget(params)
  .then((data: v2.BudgetValidationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Create arbitrary cost rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateArbitraryCostRuleRequest = {
  body: {
    data: {
      attributes: {
        costsToAllocate: [
          {
            condition: "is",
            tag: "account_id",
            value: "123456789",
            values: [],
          },
          {
            condition: "in",
            tag: "environment",
            value: "",
            values: ["production", "staging"],
          },
        ],
        enabled: true,
        orderId: 1,
        provider: ["aws", "gcp"],
        ruleName: "example-arbitrary-cost-rule",
        strategy: {
          allocatedByTagKeys: ["team", "environment"],
          basedOnCosts: [
            {
              condition: "is",
              tag: "service",
              value: "web-api",
              values: [],
            },
            {
              condition: "not in",
              tag: "team",
              value: "",
              values: ["legacy", "deprecated"],
            },
          ],
          granularity: "daily",
          method: "proportional",
        },
        type: "shared",
      },
      type: "upsert_arbitrary_rule",
    },
  },
};

apiInstance
  .createArbitraryCostRule(params)
  .then((data: v2.ArbitraryRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

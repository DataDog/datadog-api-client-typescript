/**
 * Create a unit cost returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createUnitCost"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiCreateUnitCostRequest = {
  body: {
    data: {
      attributes: {
        denominatorQuery: {
          formulas: [
            {
              formula: "numerator",
            },
          ],
          queries: [
            {
              data_source: "cloud_cost",
              name: "numerator",
              query:
                "sum:aws.cost.net.amortized.shared.resources.allocated{*}.rollup(sum, daily)",
            },
          ],
        },
        description:
          "Amortized cloud spend divided by the number of active users.",
        name: "Cloud cost per active user",
        numeratorQuery: {
          formulas: [
            {
              formula: "numerator",
            },
          ],
          queries: [
            {
              data_source: "cloud_cost",
              name: "numerator",
              query:
                "sum:aws.cost.net.amortized.shared.resources.allocated{*}.rollup(sum, daily)",
            },
          ],
        },
        unitLabel: "user",
      },
      type: "unit_cost",
    },
  },
};

apiInstance
  .createUnitCost(params)
  .then((data: v2.UnitCostResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

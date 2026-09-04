/**
 * Update a unit cost returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateUnitCost"] = true;
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiUpdateUnitCostRequest = {
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
      id: "64aecd58-e355-4f07-9c3a-56ff6bda6cd8",
      type: "unit_cost",
    },
  },
  unitCostId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateUnitCost(params)
  .then((data: v2.UnitCostResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

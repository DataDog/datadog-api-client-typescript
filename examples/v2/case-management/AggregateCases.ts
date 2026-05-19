/**
 * Aggregate cases returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.aggregateCases"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiAggregateCasesRequest = {
  body: {
    data: {
      attributes: {
        groupBy: {
          groups: ["status"],
          limit: 14,
        },
        queryFilter: "service:case-api",
      },
      type: "aggregate",
    },
  },
};

apiInstance
  .aggregateCases(params)
  .then((data: v2.CaseAggregateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

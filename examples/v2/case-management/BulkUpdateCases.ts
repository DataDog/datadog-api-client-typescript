/**
 * Bulk update cases returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.bulkUpdateCases"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiBulkUpdateCasesRequest = {
  body: {
    data: {
      attributes: {
        caseIds: ["case-id-1", "case-id-2"],
        payload: {
          priority: "P1",
        },
        type: "priority",
      },
      type: "bulk",
    },
  },
};

apiInstance
  .bulkUpdateCases(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

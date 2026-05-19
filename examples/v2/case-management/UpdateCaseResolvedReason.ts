/**
 * Update case resolved reason returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCaseResolvedReason"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateCaseResolvedReasonRequest = {
  body: {
    data: {
      attributes: {
        securityResolvedReason: "FALSE_POSITIVE",
      },
      type: "case",
    },
  },
  caseId: "case_id",
};

apiInstance
  .updateCaseResolvedReason(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

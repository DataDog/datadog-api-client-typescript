/**
 * Update case title returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

// there is a valid "case" in the system
const CASE_ID = process.env.CASE_ID as string;

const params: v2.CaseManagementApiUpdateCaseTitleRequest = {
  body: {
    data: {
      attributes: {
        title: "[UPDATED] Memory leak investigation on API",
      },
      type: "case",
    },
  },
  caseId: CASE_ID,
};

apiInstance
  .updateCaseTitle(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

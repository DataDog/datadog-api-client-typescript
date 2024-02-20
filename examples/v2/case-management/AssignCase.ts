/**
 * Assign case returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

// there is a valid "case" in the system
const CASE_ID = process.env.CASE_ID as string;

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.CaseManagementApiAssignCaseRequest = {
  body: {
    data: {
      attributes: {
        assigneeId: USER_DATA_ID,
      },
      type: "case",
    },
  },
  caseId: CASE_ID,
};

apiInstance
  .assignCase(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

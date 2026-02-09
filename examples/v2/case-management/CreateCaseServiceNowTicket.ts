/**
 * Create ServiceNow ticket for case returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCaseServiceNowTicket"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateCaseServiceNowTicketRequest = {
  body: {
    data: {
      attributes: {
        assignmentGroup: "IT Support",
        instanceName: "my-instance",
      },
      type: "tickets",
    },
  },
  caseId: "case_id",
};

apiInstance
  .createCaseServiceNowTicket(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

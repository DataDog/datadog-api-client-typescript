/**
 * Create a change request returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createChangeRequest"] = true;
const apiInstance = new v2.ChangeManagementApi(configuration);

const params: v2.ChangeManagementApiCreateChangeRequestRequest = {
  body: {
    data: {
      attributes: {
        changeRequestLinkedIncidentUuid: "00000000-0000-0000-0000-000000000000",
        changeRequestMaintenanceWindowQuery: "",
        changeRequestPlan:
          "1. Deploy to staging 2. Run tests 3. Deploy to production",
        changeRequestRisk: "LOW",
        changeRequestType: "NORMAL",
        description: "Deploying new payment service v2.1",
        endDate: new Date(2024, 1, 2, 15, 0, 0, 0),
        projectId: "d4bbe1af-f36e-42f1-87c1-493ca35c320e",
        requestedTeams: ["team-handle-1"],
        startDate: new Date(2024, 1, 1, 3, 0, 0, 0),
        title: "Deploy new payment service",
      },
      type: "change_request",
    },
  },
};

apiInstance
  .createChangeRequest(params)
  .then((data: v2.ChangeRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

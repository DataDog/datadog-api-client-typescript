/**
 * Create ServiceNow tickets for security findings returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createServiceNowTickets"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateServiceNowTicketsRequest = {
  body: {
    data: [
      {
        attributes: {
          assigneeId: "f315bdaf-9ee7-4808-a9c1-99c15bf0f4d0",
          description: "A description of the ServiceNow ticket.",
          priority: "NOT_DEFINED",
          title: "A title for the ServiceNow ticket.",
        },
        relationships: {
          findings: {
            data: [
              {
                id: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
                type: "findings",
              },
            ],
          },
          project: {
            data: {
              id: "aeadc05e-98a8-11ec-ac2c-da7ad0900001",
              type: "projects",
            },
          },
        },
        type: "servicenow_tickets",
      },
    ],
  },
};

apiInstance
  .createServiceNowTickets(params)
  .then((data: v2.FindingCaseResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

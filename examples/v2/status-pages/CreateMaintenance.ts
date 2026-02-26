/**
 * Schedule maintenance returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiCreateMaintenanceRequest = {
  body: {
    data: {
      attributes: {
        completedDate: new Date(2026, 2, 18, 19, 51, 13, 332360),
        completedDescription:
          "We have completed maintenance on the API to improve performance.",
        componentsAffected: [
          {
            id: "1234abcd-12ab-34cd-56ef-123456abcdef",
            status: "operational",
          },
        ],
        inProgressDescription:
          "We are currently performing maintenance on the API to improve performance.",
        scheduledDescription:
          "We will be performing maintenance on the API to improve performance.",
        startDate: new Date(2026, 2, 18, 19, 21, 13, 332360),
        title: "API Maintenance",
      },
      type: "maintenances",
    },
  },
  pageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .createMaintenance(params)
  .then((data: v2.Maintenance) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

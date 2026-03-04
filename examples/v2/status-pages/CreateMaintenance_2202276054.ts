/**
 * Create maintenance returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID = process.env
  .STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID as string;
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiCreateMaintenanceRequest = {
  body: {
    data: {
      attributes: {
        title: "API Maintenance",
        scheduledDescription:
          "We will be performing maintenance on the API to improve performance.",
        inProgressDescription:
          "We are currently performing maintenance on the API to improve performance.",
        completedDescription:
          "We have completed maintenance on the API to improve performance.",
        startDate: new Date(new Date().getTime() + 1 * 3600 * 1000),
        completedDate: new Date(new Date().getTime() + 2 * 3600 * 1000),
        componentsAffected: [
          {
            id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
            status: "operational",
          },
        ],
      },
      type: "maintenances",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .createMaintenance(params)
  .then((data: v2.Maintenance) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

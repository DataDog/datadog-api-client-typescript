/**
 * Create backfilled maintenance returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID = process.env
  .STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID as string;
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

const params: v2.StatusPagesApiCreateBackfilledMaintenanceRequest = {
  body: {
    data: {
      attributes: {
        title: "Past Database Maintenance",
        updates: [
          {
            componentsAffected: [
              {
                id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
                status: "maintenance",
              },
            ],
            description: "Database maintenance is in progress.",
            startedAt: new Date(new Date().getTime() + -1 * 3600 * 1000),
            status: "in_progress",
          },
          {
            componentsAffected: [
              {
                id: STATUS_PAGE_DATA_ATTRIBUTES_COMPONENTS_0_COMPONENTS_0_ID,
                status: "operational",
              },
            ],
            description:
              "Database maintenance has been completed successfully.",
            startedAt: new Date(),
            status: "completed",
          },
        ],
      },
      type: "maintenances",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
};

apiInstance
  .createBackfilledMaintenance(params)
  .then((data: v2.Maintenance) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

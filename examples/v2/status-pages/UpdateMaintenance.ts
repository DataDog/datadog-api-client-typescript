/**
 * Update maintenance returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "status_page" in the system
const STATUS_PAGE_DATA_ID = process.env.STATUS_PAGE_DATA_ID as string;

// there is a valid "maintenance" in the system
const MAINTENANCE_DATA_ID = process.env.MAINTENANCE_DATA_ID as string;

const params: v2.StatusPagesApiUpdateMaintenanceRequest = {
  body: {
    data: {
      attributes: {
        scheduledDescription:
          "We will be performing maintenance on the API to improve performance for 40 minutes.",
        inProgressDescription:
          "We are currently performing maintenance on the API to improve performance for 40 minutes.",
      },
      id: MAINTENANCE_DATA_ID,
      type: "maintenances",
    },
  },
  pageId: STATUS_PAGE_DATA_ID,
  maintenanceId: MAINTENANCE_DATA_ID,
};

apiInstance
  .updateMaintenance(params)
  .then((data: v2.Maintenance) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Edit maintenance update returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiPatchMaintenanceUpdateRequest = {
  body: {
    data: {
      attributes: {
        description:
          "We have completed maintenance on the API to improve performance.",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "maintenance_updates",
    },
  },
  pageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  maintenanceId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  updateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .patchMaintenanceUpdate(params)
  .then((data: v2.MaintenanceUpdate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

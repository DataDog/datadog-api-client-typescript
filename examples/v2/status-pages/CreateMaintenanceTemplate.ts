/**
 * Create maintenance template returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiCreateMaintenanceTemplateRequest = {
  body: {
    data: {
      attributes: {
        componentIds: [],
        name: "",
      },
      type: "maintenance_templates",
    },
  },
  pageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .createMaintenanceTemplate(params)
  .then((data: v2.MaintenanceTemplate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

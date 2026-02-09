/**
 * Update workflow favorite status returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateWorkflowFavorite"] = true;
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiUpdateWorkflowFavoriteRequest = {
  body: {
    data: {
      attributes: {
        favorite: true,
      },
      type: "workflow_favorite_request",
    },
  },
  workflowId: "workflow_id",
};

apiInstance
  .updateWorkflowFavorite(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

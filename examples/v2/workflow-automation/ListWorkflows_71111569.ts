/**
 * List workflows returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WorkflowAutomationApi(configuration);

const params: v2.WorkflowAutomationApiListWorkflowsRequest = {
  limit: 2,
  filterQuery: "Example-Workflow-Automation",
};

(async () => {
  try {
    for await (const item of apiInstance.listWorkflowsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();

/**
 * Create a project returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateProjectRequest = {
  body: {
    data: {
      attributes: {
        key: "SEC",
        name: "Security Investigation",
      },
      type: "project",
    },
  },
};

apiInstance
  .createProject(params)
  .then((data: v2.ProjectResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

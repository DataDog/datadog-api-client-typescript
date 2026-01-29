/**
 * Update a project returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateProjectRequest = {
  body: {
    data: {
      type: "project",
      attributes: {
        name: "Updated Project Name Example-Case-Management",
      },
    },
  },
  projectId: "d4bbe1af-f36e-42f1-87c1-493ca35c320e",
};

apiInstance
  .updateProject(params)
  .then((data: v2.ProjectResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

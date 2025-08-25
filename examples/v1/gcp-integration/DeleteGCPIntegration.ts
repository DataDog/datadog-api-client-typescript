/**
 * Delete a GCP integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

const params: v1.GCPIntegrationApiDeleteGCPIntegrationRequest = {
  body: {
    clientEmail: "252bf553ef04b351@example.com",
    clientId: "163662907116366290710",
    projectId: "datadog-apitest",
  },
};

apiInstance
  .deleteGCPIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * List all GCP integrations returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

apiInstance
  .listGCPIntegration()
  .then((data: v1.GCPAccount[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Delete an entity integration configuration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteEntityIntegrationConfig"] = true;
const apiInstance = new v2.EntityIntegrationConfigsApi(configuration);

const params: v2.EntityIntegrationConfigsApiDeleteEntityIntegrationConfigRequest =
  {
    integrationId: "github",
  };

apiInstance
  .deleteEntityIntegrationConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

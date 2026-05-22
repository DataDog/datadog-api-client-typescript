/**
 * Get an entity integration configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getEntityIntegrationConfig"] = true;
const apiInstance = new v2.EntityIntegrationConfigsApi(configuration);

const params: v2.EntityIntegrationConfigsApiGetEntityIntegrationConfigRequest =
  {
    integrationId: "github",
  };

apiInstance
  .getEntityIntegrationConfig(params)
  .then((data: v2.EntityIntegrationConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

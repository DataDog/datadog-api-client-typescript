/**
 * Get Entra ID Azure App Registration prerequisites returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getEntraIdAzureAppRegistrations"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .getEntraIdAzureAppRegistrations()
  .then((data: v2.SecurityMonitoringEntraIdAzureAppRegistrationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

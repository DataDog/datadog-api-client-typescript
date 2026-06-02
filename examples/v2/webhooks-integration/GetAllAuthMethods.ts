/**
 * Get all auth methods returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebhooksIntegrationApi(configuration);

apiInstance
  .getAllAuthMethods()
  .then((data: v2.WebhooksAuthMethodsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

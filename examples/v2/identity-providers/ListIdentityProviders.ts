/**
 * List identity providers returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IdentityProvidersApi(configuration);

apiInstance
  .listIdentityProviders()
  .then((data: v2.IdentityProvidersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

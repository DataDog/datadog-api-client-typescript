/**
 * Get an OAuth2 client scopes restriction returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getScopesRestriction"] = true;
const apiInstance = new v2.OAuth2ClientPublicApi(configuration);

const params: v2.OAuth2ClientPublicApiGetScopesRestrictionRequest = {
  clientUuid: "fafa8e1c-36a5-11f0-a83d-da7ad0900001",
};

apiInstance
  .getScopesRestriction(params)
  .then((data: v2.OAuthScopesRestrictionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

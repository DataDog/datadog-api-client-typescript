/**
 * Upsert an OAuth2 client scopes restriction returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertScopesRestriction"] = true;
const apiInstance = new v2.OAuth2ClientPublicApi(configuration);

const params: v2.OAuth2ClientPublicApiUpsertScopesRestrictionRequest = {
  body: {
    data: {
      attributes: {
        oidcScopes: ["openid", "email"],
        permissionScopes: ["dashboards_read", "metrics_read"],
      },
      type: "upsert_scopes_restriction",
    },
  },
  clientUuid: "fafa8e1c-36a5-11f0-a83d-da7ad0900001",
};

apiInstance
  .upsertScopesRestriction(params)
  .then((data: v2.OAuthScopesRestrictionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

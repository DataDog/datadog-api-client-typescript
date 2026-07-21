/**
 * Update the MCP Cross-App Access issuer URL returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl"
] = true;
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateLoginOrgConfigsMcpCrossAppAccessIssuerUrlRequest =
  {
    body: {
      data: {
        attributes: {
          issuerUrl: "https://your-subdomain.okta.com",
        },
        type: "org_config",
      },
    },
  };

apiInstance
  .updateLoginOrgConfigsMcpCrossAppAccessIssuerUrl(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

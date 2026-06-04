/**
 * Update organization SAML preferences returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOrgSamlConfigurations"] = true;
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateOrgSamlConfigurationsRequest = {
  body: {
    data: {
      attributes: {
        defaultRoleUuids: ["8dd1cf3c-0c75-11ea-ad28-fb5701eabc7d"],
        jitDomains: ["example.com"],
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "saml_preferences",
    },
  },
};

apiInstance
  .updateOrgSamlConfigurations(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

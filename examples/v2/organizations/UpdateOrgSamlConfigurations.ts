/**
 * Update organization SAML preferences returns "No Content - The SAML preferences were successfully updated." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOrgSamlConfigurations"] = true;
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateOrgSamlConfigurationsRequest = {
  body: {
    data: {
      attributes: {
        defaultRoleUuids: ["19fcc38b-b651-46a0-b463-1f8f56c6a862"],
        jitDomains: ["example1.com", "example2.com"],
      },
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

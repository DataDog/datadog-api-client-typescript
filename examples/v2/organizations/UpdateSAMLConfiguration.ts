/**
 * Update a SAML configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateSAMLConfigurationRequest = {
  body: {
    data: {
      attributes: {
        idpInitiated: true,
        jitDomains: ["example.com"],
      },
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      relationships: {
        defaultRoles: {
          data: [
            {
              id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
              type: "roles",
            },
          ],
        },
      },
      type: "saml_configurations",
    },
  },
  samlConfigUuid: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
};

apiInstance
  .updateSAMLConfiguration(params)
  .then((data: v2.SAMLConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

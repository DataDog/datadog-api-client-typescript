/**
 * Update your organization returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

const params: v1.OrganizationsApiUpdateOrgRequest = {
  body: {
    billing: {
      type: "parent_billing",
    },
    description: "some description",
    name: "New child org",
    publicId: "abcdef12345",
    settings: {
      privateWidgetShare: false,
      saml: {
        enabled: false,
      },
      samlAutocreateAccessRole: "ro",
      samlAutocreateUsersDomains: {
        domains: ["example.com"],
        enabled: false,
      },
      samlCanBeEnabled: false,
      samlIdpEndpoint: "https://my.saml.endpoint",
      samlIdpInitiatedLogin: {
        enabled: false,
      },
      samlIdpMetadataUploaded: false,
      samlLoginUrl: "https://my.saml.login.url",
      samlStrictMode: {
        enabled: false,
      },
    },
    subscription: {
      type: "pro",
    },
    trial: false,
  },
  publicId: "abc123",
};

apiInstance
  .updateOrg(params)
  .then((data: v1.OrganizationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

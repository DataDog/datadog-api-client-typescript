/**
 * Create a GCP integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

const params: v1.GCPIntegrationApiCreateGCPIntegrationRequest = {
  body: {
    authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
    authUri: "https://accounts.google.com/o/oauth2/auth",
    clientEmail: "252bf553ef04b351@example.com",
    clientId: "163662907116366290710",
    clientX509CertUrl:
      "https://www.googleapis.com/robot/v1/metadata/x509/$CLIENT_EMAIL",
    hostFilters: "key:value,filter:example",
    cloudRunRevisionFilters: ["dr:dre"],
    isCspmEnabled: true,
    isSecurityCommandCenterEnabled: true,
    isResourceChangeCollectionEnabled: true,
    privateKey: "private_key",
    privateKeyId: "123456789abcdefghi123456789abcdefghijklm",
    projectId: "datadog-apitest",
    resourceCollectionEnabled: true,
    tokenUri: "https://accounts.google.com/o/oauth2/token",
    type: "service_account",
  },
};

apiInstance
  .createGCPIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

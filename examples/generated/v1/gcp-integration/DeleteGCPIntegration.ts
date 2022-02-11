import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

let params:v1.GCPIntegrationApiDeleteGCPIntegrationRequest = {
  // GCPAccount | Delete a given Datadog-GCP integration.
  body: {
    authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
    authUri: "https://accounts.google.com/o/oauth2/auth",
    automute: true,
    clientEmail: "api-dev@datadog-sandbox.iam.gserviceaccount.com",
    clientId: "123456712345671234567",
    clientX509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/<CLIENT_EMAIL>",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    privateKey: "private_key",
    privateKeyId: "123456789abcdefghi123456789abcdefghijklm",
    projectId: "datadog-apitest",
    tokenUri: "https://accounts.google.com/o/oauth2/token",
    type: "service_account",
  },
};

apiInstance.deleteGCPIntegration(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));

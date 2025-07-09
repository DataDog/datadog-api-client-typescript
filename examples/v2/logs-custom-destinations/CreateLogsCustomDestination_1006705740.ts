/**
 * Create a Google Security Operations custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

const params: v2.LogsCustomDestinationsApiCreateLogsCustomDestinationRequest = {
  body: {
    data: {
      attributes: {
        enabled: false,
        forwardTags: false,
        forwardTagsRestrictionList: ["datacenter", "host"],
        forwardTagsRestrictionListType: "ALLOW_LIST",
        forwarderDestination: {
          type: "google_security_operations",
          customerId: "123-456-7890",
          regionalEndpoint: "https://malachiteingestion-pa.googleapis.com",
          namespace: "google-security-operations-namespace",
          auth: {
            type: "gcp_private_key",
            projectId: "gcp-project",
            privateKeyId: "abc12345678",
            clientEmail: "client@example.com",
            clientId: "def123456",
            privateKey:
              "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBK...\n-----END PRIVATE KEY-----\n",
          },
        },
        name: "Nginx logs",
        query: "source:nginx",
      },
      type: "custom_destination",
    },
  },
};

apiInstance
  .createLogsCustomDestination(params)
  .then((data: v2.CustomDestinationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

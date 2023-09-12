/**
 * Create a custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLogsCustomDestination"] = true;
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

const params: v2.LogsCustomDestinationsApiCreateLogsCustomDestinationRequest = {
  body: {
    data: {
      attributes: {
        bufferMaxBytes: 10000000,
        bufferTimeoutSeconds: 100,
        compression: "GZIP",
        enabled: true,
        fallbackDestination: {
          container: "container-name",
          integration: {
            clientId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
            tenantId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
          },
          storageAccount: "account-name",
          type: "azure",
        },
        forwarderDestination: {
          auth: {
            password: "password",
            type: "basic",
            username: "username",
          },
          endpoint: "https://example.org/my-intake",
          type: "http",
        },
        maxRetryDurationSeconds: 100,
        name: "my-destination",
        query: "source:dummy",
        version: 0,
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

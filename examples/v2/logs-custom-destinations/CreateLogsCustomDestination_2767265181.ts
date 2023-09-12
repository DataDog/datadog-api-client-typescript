/**
 * Create a custom destination with Elasticsearch forwarding returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createLogsCustomDestination"] = true;
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

const params: v2.LogsCustomDestinationsApiCreateLogsCustomDestinationRequest = {
  body: {
    data: {
      attributes: {
        name: "my-destination",
        version: 0,
        forwarderDestination: {
          type: "elasticsearch",
          endpoint: "https://example.org/my-intake",
          indexName: "name",
          indexRotation: "yyyy-MM-dd",
          auth: {
            type: "basic",
            username: "username",
            password: "password",
          },
        },
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

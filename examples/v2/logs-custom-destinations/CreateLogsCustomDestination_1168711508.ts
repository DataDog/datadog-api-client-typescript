/**
 * Create a custom destination with HTTP request header forwarding returns "OK" response
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
          type: "http",
          endpoint: "https://example.org/my-intake",
          auth: {
            type: "custom_header",
            headerName: "header",
            headerValue: "value",
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

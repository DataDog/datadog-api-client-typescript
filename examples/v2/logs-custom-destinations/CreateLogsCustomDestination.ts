/**
 * Create a custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

const params: v2.LogsCustomDestinationsApiCreateLogsCustomDestinationRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        forwardTags: true,
        forwardTagsRestrictionList: ["datacenter", "host"],
        forwardTagsRestrictionListType: "ALLOW_LIST",
        forwarderDestination: {
          auth: {
            password: "datadog-custom-destination-password",
            type: "basic",
            username: "datadog-custom-destination-username",
          },
          endpoint: "https://example.com",
          type: "http",
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

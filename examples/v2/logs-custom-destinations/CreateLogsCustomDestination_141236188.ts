/**
 * Create an Elasticsearch custom destination returns "OK" response
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
          auth: {
            username: "my-username",
            password: "my-password",
          },
          indexName: "nginx-logs",
          indexRotation: "yyyy-MM-dd",
          endpoint: "https://example.com",
          type: "elasticsearch",
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

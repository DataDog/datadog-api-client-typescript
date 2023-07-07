/**
 * Add Confluent account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ConfluentCloudApi(configuration);

const params: v2.ConfluentCloudApiCreateConfluentAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: "TESTAPIKEY123",
        apiSecret: "test-api-secret-123",
        resources: [
          {
            enableCustomMetrics: false,
            id: "resource-id-123",
            resourceType: "kafka",
            tags: ["myTag", "myTag2:myValue"],
          },
        ],
        tags: ["myTag", "myTag2:myValue"],
      },
      type: "confluent-cloud-accounts",
    },
  },
};

apiInstance
  .createConfluentAccount(params)
  .then((data: v2.ConfluentAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

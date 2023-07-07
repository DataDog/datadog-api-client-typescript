/**
 * Update resource in Confluent account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ConfluentCloudApi(configuration);

const params: v2.ConfluentCloudApiUpdateConfluentResourceRequest = {
  body: {
    data: {
      attributes: {
        enableCustomMetrics: false,
        resourceType: "kafka",
        tags: ["myTag", "myTag2:myValue"],
      },
      id: "resource-id-123",
      type: "confluent-cloud-resources",
    },
  },
  accountId: "account_id",
  resourceId: "resource_id",
};

apiInstance
  .updateConfluentResource(params)
  .then((data: v2.ConfluentResourceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Update Fastly service returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FastlyIntegrationApi(configuration);

const params: v2.FastlyIntegrationApiUpdateFastlyServiceRequest = {
  body: {
    data: {
      attributes: {
        tags: ["myTag", "myTag2:myValue"],
      },
      id: "abc123",
      type: "fastly-services",
    },
  },
  accountId: "account_id",
  serviceId: "service_id",
};

apiInstance
  .updateFastlyService(params)
  .then((data: v2.FastlyServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

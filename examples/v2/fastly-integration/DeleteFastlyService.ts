/**
 * Delete Fastly service returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FastlyIntegrationApi(configuration);

const params: v2.FastlyIntegrationApiDeleteFastlyServiceRequest = {
  accountId: "account_id",
  serviceId: "service_id",
};

apiInstance
  .deleteFastlyService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

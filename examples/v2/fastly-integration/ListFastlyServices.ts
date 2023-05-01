/**
 * List Fastly services returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FastlyIntegrationApi(configuration);

const params: v2.FastlyIntegrationApiListFastlyServicesRequest = {
  accountId: "account_id",
};

apiInstance
  .listFastlyServices(params)
  .then((data: v2.FastlyServicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

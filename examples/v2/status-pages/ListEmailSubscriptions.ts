/**
 * List email subscriptions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listEmailSubscriptions"] = true;
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiListEmailSubscriptionsRequest = {
  pageId: "ed50804f-f823-4d2c-ba56-c998cbd0ae0a",
};

apiInstance
  .listEmailSubscriptions(params)
  .then((data: v2.StatusPageEmailSubscriptionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

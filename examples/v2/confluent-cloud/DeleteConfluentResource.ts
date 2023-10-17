/**
 * Delete resource from Confluent account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ConfluentCloudApi(configuration);

const params: v2.ConfluentCloudApiDeleteConfluentResourceRequest = {
  accountId: "account_id",
  resourceId: "resource_id",
};

apiInstance
  .deleteConfluentResource(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

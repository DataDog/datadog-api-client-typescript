/**
 * Delete AWS scan options returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiDeleteAwsScanOptionsRequest = {
  accountId: "account_id",
};

apiInstance
  .deleteAwsScanOptions(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

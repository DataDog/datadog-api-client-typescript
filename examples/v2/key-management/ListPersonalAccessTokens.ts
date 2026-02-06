/**
 * List personal access tokens returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listPersonalAccessTokens"] = true;
const apiInstance = new v2.KeyManagementApi(configuration);

apiInstance
  .listPersonalAccessTokens()
  .then((data: v2.PersonalAccessTokensListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

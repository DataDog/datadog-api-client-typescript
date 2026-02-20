/**
 * Get space information by display name returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiGetSpaceByDisplayNameRequest = {
  domainName: "datadog.ninja",
  spaceDisplayName: "api-test-space",
};

apiInstance
  .getSpaceByDisplayName(params)
  .then((data: v2.GoogleChatAppNamedSpaceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

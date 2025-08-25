/**
 * Get All Container groups returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ContainersApi(configuration);

const params: v2.ContainersApiListContainersRequest = {
  groupBy: "short_image",
};

apiInstance
  .listContainers(params)
  .then((data: v2.ContainersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

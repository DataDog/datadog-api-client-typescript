/**
 * Get all Container Images returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ContainerImagesApi(configuration);

apiInstance
  .listContainerImages()
  .then((data: v2.ContainerImagesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

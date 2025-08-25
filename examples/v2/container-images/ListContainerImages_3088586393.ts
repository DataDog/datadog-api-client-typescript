/**
 * Get all Container Images returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ContainerImagesApi(configuration);

const params: v2.ContainerImagesApiListContainerImagesRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listContainerImagesWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();

/**
 * List Custom Costs files with pagination parameters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);

const params: v2.CloudCostManagementApiListCustomCostsFilesRequest = {
  pageNumber: 1,
  pageSize: 10,
  sort: "-created_at",
};

apiInstance
  .listCustomCostsFiles(params)
  .then((data: v2.CustomCostsFileListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

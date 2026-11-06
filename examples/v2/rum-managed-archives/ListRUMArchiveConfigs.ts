/**
 * List archive configurations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMManagedArchivesApi(configuration);

const params: v2.RUMManagedArchivesApiListRUMArchiveConfigsRequest = {
  pageNumber: 0,
  pageSize: 1,
};

apiInstance
  .listRUMArchiveConfigs(params)
  .then((data: v2.RumArchiveConfigListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

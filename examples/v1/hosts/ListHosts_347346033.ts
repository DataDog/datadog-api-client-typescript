/**
 * Get all hosts with metadata deserializes successfully
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

const params: v1.HostsApiListHostsRequest = {
  includeHostsMetadata: true,
};

apiInstance
  .listHosts(params)
  .then((data: v1.HostListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get all service definitions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceDefinitionApi(configuration);

const params: v2.ServiceDefinitionApiListServiceDefinitionsRequest = {
  schemaVersion: "v2.1",
};

apiInstance
  .listServiceDefinitions(params)
  .then((data: v2.ServiceDefinitionsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

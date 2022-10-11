/**
 * Get a single service definition returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceDefinitionApi(configuration);

const params: v2.ServiceDefinitionApiGetServiceDefinitionRequest = {
  serviceName:
    "service-Example-Get_a_single_service_definition_returns_OK_response",
};

apiInstance
  .getServiceDefinition(params)
  .then((data: v2.ServiceDefinitionGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * List all AuthN Mappings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

apiInstance
  .listAuthNMappings()
  .then((data: v2.AuthNMappingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

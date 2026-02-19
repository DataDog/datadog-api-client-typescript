/**
 * List AWS cloud authentication persona mappings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAWSCloudAuthPersonaMappings"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

apiInstance
  .listAWSCloudAuthPersonaMappings()
  .then((data: v2.AWSCloudAuthPersonaMappingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

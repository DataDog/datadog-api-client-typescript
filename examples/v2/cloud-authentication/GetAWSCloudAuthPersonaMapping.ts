/**
 * Get an AWS cloud authentication persona mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAWSCloudAuthPersonaMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest = {
  personaMappingId: "persona_mapping_id",
};

apiInstance
  .getAWSCloudAuthPersonaMapping(params)
  .then((data: v2.AWSCloudAuthPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

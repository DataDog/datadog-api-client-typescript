/**
 * Delete an AWS cloud authentication persona mapping returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAWSCloudAuthPersonaMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest =
  {
    personaMappingId: "persona_mapping_id",
  };

apiInstance
  .deleteAWSCloudAuthPersonaMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

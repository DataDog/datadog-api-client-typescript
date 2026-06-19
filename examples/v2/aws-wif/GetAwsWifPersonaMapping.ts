/**
 * Get an AWS WIF persona mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSWIFApi(configuration);

const params: v2.AWSWIFApiGetAwsWifPersonaMappingRequest = {
  configUuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getAwsWifPersonaMapping(params)
  .then((data: v2.AwsWifPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

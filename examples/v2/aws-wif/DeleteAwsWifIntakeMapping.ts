/**
 * Delete an AWS WIF intake mapping returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSWIFApi(configuration);

const params: v2.AWSWIFApiDeleteAwsWifIntakeMappingRequest = {
  configUuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .deleteAwsWifIntakeMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

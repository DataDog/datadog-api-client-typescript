/**
 * Generate a new external ID returns "AWS External ID object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createNewAWSExternalID"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .createNewAWSExternalID()
  .then((data: v2.AWSNewExternalIDResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

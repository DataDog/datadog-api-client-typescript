/**
 * Get AWS integration standard IAM permissions returns "AWS integration standard IAM permissions." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .getAWSIntegrationIAMPermissionsStandard()
  .then((data: v2.AWSIntegrationIamPermissionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

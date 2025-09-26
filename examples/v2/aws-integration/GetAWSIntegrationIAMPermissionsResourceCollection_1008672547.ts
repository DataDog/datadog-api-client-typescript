/**
 * Get resource collection IAM permissions returns "AWS IAM Permissions object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .getAWSIntegrationIAMPermissionsResourceCollection()
  .then((data: v2.AWSIntegrationIamPermissionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

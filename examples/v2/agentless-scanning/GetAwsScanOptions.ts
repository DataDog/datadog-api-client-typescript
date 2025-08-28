/**
 * Get AWS scan options returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

// there is a valid "aws_scan_options" in the system
const AWS_SCAN_OPTIONS_ID = process.env.AWS_SCAN_OPTIONS_ID as string;

const params: v2.AgentlessScanningApiGetAwsScanOptionsRequest = {
  accountId: AWS_SCAN_OPTIONS_ID,
};

apiInstance
  .getAwsScanOptions(params)
  .then((data: v2.AwsScanOptionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

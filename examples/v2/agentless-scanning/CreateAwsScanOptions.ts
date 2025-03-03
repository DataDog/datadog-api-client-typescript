/**
 * Post AWS Scan Options returns "Agentless scan options enabled successfully." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiCreateAwsScanOptionsRequest = {
  body: {
    data: {
      id: "000000000003",
      type: "aws_scan_options",
      attributes: {
        lambda: true,
        sensitiveData: false,
        vulnContainersOs: true,
        vulnHostOs: true,
      },
    },
  },
};

apiInstance
  .createAwsScanOptions(params)
  .then((data: v2.AwsScanOptionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

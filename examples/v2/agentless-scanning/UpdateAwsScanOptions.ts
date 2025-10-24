/**
 * Update AWS scan options returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiUpdateAwsScanOptionsRequest = {
  body: {
    data: {
      type: "aws_scan_options",
      id: "000000000002",
      attributes: {
        vulnHostOs: true,
        vulnContainersOs: true,
        lambda: false,
      },
    },
  },
  accountId: "000000000002",
};

apiInstance
  .updateAwsScanOptions(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

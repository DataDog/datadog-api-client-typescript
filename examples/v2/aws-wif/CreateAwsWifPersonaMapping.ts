/**
 * Create an AWS WIF persona mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSWIFApi(configuration);

const params: v2.AWSWIFApiCreateAwsWifPersonaMappingRequest = {
  body: {
    data: {
      attributes: {
        accountIdentifier: "user@example.com",
        arnPattern: "arn:aws:iam::123456789012:role/my-workload-role",
      },
      type: "aws_wif_config",
    },
  },
};

apiInstance
  .createAwsWifPersonaMapping(params)
  .then((data: v2.AwsWifPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

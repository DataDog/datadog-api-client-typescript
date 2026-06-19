/**
 * Create an AWS WIF intake mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSWIFApi(configuration);

const params: v2.AWSWIFApiCreateAwsWifIntakeMappingRequest = {
  body: {
    data: {
      attributes: {
        arnPattern: "arn:aws:iam::123456789012:role/my-agent-role",
      },
      type: "aws_wif_intake_mapping",
    },
  },
};

apiInstance
  .createAwsWifIntakeMapping(params)
  .then((data: v2.AwsWifIntakeMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

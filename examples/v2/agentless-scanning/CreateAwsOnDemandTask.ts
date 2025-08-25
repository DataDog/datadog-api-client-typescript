/**
 * Post an AWS on demand task returns "AWS on demand task created successfully." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiCreateAwsOnDemandTaskRequest = {
  body: {
    data: {
      attributes: {
        arn: "arn:aws:lambda:eu-west-3:376334461865:function:This-Is-An-Api-Spec-Test",
      },
      type: "aws_resource",
    },
  },
};

apiInstance
  .createAwsOnDemandTask(params)
  .then((data: v2.AwsOnDemandResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

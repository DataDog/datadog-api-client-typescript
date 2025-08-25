/**
 * Send pipeline job event returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest = {
  body: {
    data: {
      attributes: {
        resource: {
          level: "job",
          id: "cf9456de-8b9e-4c27-aa79-27b1e78c1a33",
          name: "Build image",
          pipelineUniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
          pipelineName: "Deploy to AWS",
          start: new Date(new Date().getTime() + -120 * 1000),
          end: new Date(new Date().getTime() + -30 * 1000),
          status: "error",
          url: "https://my-ci-provider.example/jobs/my-jobs/run/1",
        },
      },
      type: "cipipeline_resource_request",
    },
  },
};

apiInstance
  .createCIAppPipelineEvent(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

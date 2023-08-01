/**
 * Send pipeline job event returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCIAppPipelineEvent"] = true;
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest = {
  body: {
    data: {
      attributes: {
        resource: {
          end: new Date(new Date().getTime() + -30 * 1000),
          level: "job",
          name: "Build image",
          start: new Date(new Date().getTime() + -120 * 1000),
          status: "error",
          id: "cf9456de-8b9e-4c27-aa79-27b1e78c1a33",
          pipelineUniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
          pipelineName: "Deploy to AWS",
          url: "https://my-ci-provider.example/jobs/my-jobs/run/1",
          git: {
            repositoryUrl: "https://github.com/DataDog/datadog-agent",
            sha: "7f263865994b76066c4612fd1965215e7dcb4cd2",
            authorEmail: "john.doe@email.com",
          },
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

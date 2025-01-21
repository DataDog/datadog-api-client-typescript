/**
 * Send pipeline event with custom provider returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest = {
  body: {
    data: {
      attributes: {
        providerName: "example-provider",
        resource: {
          level: "pipeline",
          uniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
          name: "Deploy to AWS",
          url: "https://my-ci-provider.example/pipelines/my-pipeline/run/1",
          start: new Date(new Date().getTime() + -120 * 1000),
          end: new Date(new Date().getTime() + -30 * 1000),
          status: "success",
          partialRetry: false,
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

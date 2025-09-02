/**
 * Send several pipeline events returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiCreateCIAppPipelineEventRequest = {
  body: {
    data: [
      {
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
      {
        attributes: {
          providerName: "example-provider",
          resource: {
            level: "pipeline",
            uniqueId: "7b2c8f9e-aa15-4d22-9c7d-83f4e065138b",
            name: "Deploy to Production",
            url: "https://my-ci-provider.example/pipelines/prod-pipeline/run/2",
            start: new Date(new Date().getTime() + -180 * 1000),
            end: new Date(new Date().getTime() + -45 * 1000),
            status: "success",
            partialRetry: false,
            git: {
              repositoryUrl: "https://github.com/DataDog/datadog-agent",
              sha: "9a4f7c28b3e5d12f8e6c9b2a5d8f3e1c7b4a6d9e",
              authorEmail: "jane.smith@email.com",
            },
          },
        },
        type: "cipipeline_resource_request",
      },
    ],
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

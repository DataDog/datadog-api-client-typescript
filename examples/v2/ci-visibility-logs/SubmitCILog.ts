/**
 * Send CI job logs returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityLogsApi(configuration);

const params: v2.CIVisibilityLogsApiSubmitCILogRequest = {
  body: [
    {
      ddtags: "runner:linux,architecture:amd64",
      jobId: "job-456",
      lineNumber: 812,
      message: "Running go test ./...",
      pipelineUniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
      providerName: "example-provider",
      sectionName: "tests",
      status: "warn",
    },
  ],
};

apiInstance
  .submitCILog(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

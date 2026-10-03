/**
 * Send one CI job log returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityLogsApi(configuration);

const params: v2.CIVisibilityLogsApiSubmitCILogRequest = {
  body: [
    {
      message: "Running go test ./...",
      pipelineUniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
      jobId: "job-456",
      providerName: "example-provider",
      lineNumber: 1,
      status: "warn",
      sectionName: "tests",
      ddtags: "runner:linux,architecture:amd64",
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

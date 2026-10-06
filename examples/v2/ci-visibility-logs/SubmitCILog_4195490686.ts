/**
 * Send batched CI job logs returns "Request accepted for processing" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityLogsApi(configuration);

const params: v2.CIVisibilityLogsApiSubmitCILogRequest = {
  body: [
    {
      message: "Starting tests",
      pipelineUniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
      jobId: "job-456",
      lineNumber: 1,
      status: "notice",
      sectionName: "tests",
    },
    {
      message: "Tests passed",
      pipelineUniqueId: "3eacb6f3-ff04-4e10-8a9c-46e6d054024a",
      jobId: "job-456",
      lineNumber: 2,
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

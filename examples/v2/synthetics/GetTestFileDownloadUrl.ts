/**
 * Get a presigned URL for downloading a test file returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetTestFileDownloadUrlRequest = {
  body: {
    bucketKey: "api-upload-file/abc-def-123/2024-01-01T00:00:00_uuid.json",
  },
  publicId: "abc-def-123",
};

apiInstance
  .getTestFileDownloadUrl(params)
  .then((data: v2.SyntheticsTestFileDownloadResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

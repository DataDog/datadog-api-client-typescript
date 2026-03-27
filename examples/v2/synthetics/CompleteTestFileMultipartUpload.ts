/**
 * Complete a multipart upload of a test file returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiCompleteTestFileMultipartUploadRequest = {
  body: {
    key: "org-123/api-upload-file/abc-def-123/2024-01-01T00:00:00_uuid.json",
    parts: [
      {
        eTag: `"d41d8cd98f00b204e9800998ecf8427e"`,
        partNumber: 1,
      },
    ],
    uploadId: "upload-id-abc123",
  },
  publicId: "abc-def-123",
};

apiInstance
  .completeTestFileMultipartUpload(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

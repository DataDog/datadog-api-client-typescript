/**
 * Get presigned URLs for uploading a test file returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetTestFileMultipartPresignedUrlsRequest = {
  body: {
    bucketKeyPrefix: "api-upload-file",
    parts: [
      {
        md5: "1B2M2Y8AsgTpgAmY7PhCfg==",
        partNumber: 1,
      },
    ],
  },
  publicId: "abc-def-123",
};

apiInstance
  .getTestFileMultipartPresignedUrls(params)
  .then((data: v2.SyntheticsTestFileMultipartPresignedUrlsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

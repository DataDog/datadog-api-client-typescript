import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestFileMultipartPresignedUrlsParams } from "./SyntheticsTestFileMultipartPresignedUrlsParams";

/**
 * Response containing presigned URLs for multipart file upload and the bucket key.
 */
export class SyntheticsTestFileMultipartPresignedUrlsResponse {
  /**
   * The bucket key that references the uploaded file after completion.
   */
  "bucketKey"?: string;
  /**
   * Presigned URL parameters returned for a multipart upload.
   */
  "multipartPresignedUrlsParams"?: SyntheticsTestFileMultipartPresignedUrlsParams;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bucketKey: {
      baseName: "bucketKey",
      type: "string",
    },
    multipartPresignedUrlsParams: {
      baseName: "multipart_presigned_urls_params",
      type: "SyntheticsTestFileMultipartPresignedUrlsParams",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestFileMultipartPresignedUrlsResponse.attributeTypeMap;
  }

  public constructor() {}
}

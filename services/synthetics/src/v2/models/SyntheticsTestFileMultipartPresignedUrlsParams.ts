import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Presigned URL parameters returned for a multipart upload.
 */
export class SyntheticsTestFileMultipartPresignedUrlsParams {
  /**
   * The full storage path for the file being uploaded.
   */
  "key"?: string;
  /**
   * The upload ID assigned by the storage provider for this multipart upload.
   */
  "uploadId"?: string;
  /**
   * A map of part numbers to presigned upload URLs.
   */
  "urls"?: { [key: string]: string };
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
    key: {
      baseName: "key",
      type: "string",
    },
    uploadId: {
      baseName: "upload_id",
      type: "string",
    },
    urls: {
      baseName: "urls",
      type: "{ [key: string]: string; }",
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
    return SyntheticsTestFileMultipartPresignedUrlsParams.attributeTypeMap;
  }

  public constructor() {}
}

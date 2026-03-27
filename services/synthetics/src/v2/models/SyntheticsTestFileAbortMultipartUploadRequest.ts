import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Request body for aborting a multipart file upload.
 */
export class SyntheticsTestFileAbortMultipartUploadRequest {
  /**
   * The full storage path of the file whose upload should be aborted.
   */
  "key": string;
  /**
   * The upload ID of the multipart upload to abort.
   */
  "uploadId": string;
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
      required: true,
    },
    uploadId: {
      baseName: "uploadId",
      type: "string",
      required: true,
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
    return SyntheticsTestFileAbortMultipartUploadRequest.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Request body for getting a presigned download URL for a test file.
 */
export class SyntheticsTestFileDownloadRequest {
  /**
   * The bucket key referencing the file to download.
   */
  "bucketKey": string;
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
    return SyntheticsTestFileDownloadRequest.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response containing a presigned URL for downloading a test file.
 */
export class SyntheticsTestFileDownloadResponse {
  /**
   * A presigned URL to download the file. The URL expires after a short period.
   */
  "url"?: string;
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
    url: {
      baseName: "url",
      type: "string",
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
    return SyntheticsTestFileDownloadResponse.attributeTypeMap;
  }

  public constructor() {}
}

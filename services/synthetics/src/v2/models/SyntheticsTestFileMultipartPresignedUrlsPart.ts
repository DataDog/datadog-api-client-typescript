import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A part descriptor for initiating a multipart upload.
 */
export class SyntheticsTestFileMultipartPresignedUrlsPart {
  /**
   * Base64-encoded MD5 digest of the part content.
   */
  "md5": string;
  /**
   * The 1-indexed part number for the multipart upload.
   */
  "partNumber": number;
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
    md5: {
      baseName: "md5",
      type: "string",
      required: true,
    },
    partNumber: {
      baseName: "partNumber",
      type: "number",
      required: true,
      format: "int64",
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
    return SyntheticsTestFileMultipartPresignedUrlsPart.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A completed part of a multipart upload.
 */
export class SyntheticsTestFileCompleteMultipartUploadPart {
  /**
   * The ETag returned by the storage provider after uploading the part.
   */
  "eTag": string;
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
    eTag: {
      baseName: "ETag",
      type: "string",
      required: true,
    },
    partNumber: {
      baseName: "PartNumber",
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
    return SyntheticsTestFileCompleteMultipartUploadPart.attributeTypeMap;
  }

  public constructor() {}
}

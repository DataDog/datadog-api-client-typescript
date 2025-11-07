import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pre-signed URLs for uploading parts of the file.
 */
export class CreateUploadResponseDataAttributes {
  /**
   * The pre-signed URLs for uploading parts. These URLs expire after 5 minutes.
   */
  "partUrls"?: Array<string>;
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
    partUrls: {
      baseName: "part_urls",
      type: "Array<string>",
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
    return CreateUploadResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

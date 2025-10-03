import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `CreateUploadResponseDataAttributes` object.
 */
export class CreateUploadResponseDataAttributes {
  /**
   * The URLs of the parts in the upload.
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

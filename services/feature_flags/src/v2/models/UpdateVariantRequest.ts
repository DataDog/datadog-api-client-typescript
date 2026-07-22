import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Request to update an existing variant's name and value.
 */
export class UpdateVariantRequest {
  /**
   * The display name of the variant.
   */
  "name"?: string;
  /**
   * The value of the variant as a string.
   */
  "value"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return UpdateVariantRequest.attributeTypeMap;
  }

  public constructor() {}
}

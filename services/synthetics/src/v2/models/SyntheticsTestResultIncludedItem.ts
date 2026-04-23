import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An included related resource.
 */
export class SyntheticsTestResultIncludedItem {
  /**
   * Attributes of the included resource.
   */
  "attributes"?: { [key: string]: any };
  /**
   * ID of the included resource.
   */
  "id"?: string;
  /**
   * Type of the included resource.
   */
  "type"?: string;
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
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return SyntheticsTestResultIncludedItem.attributeTypeMap;
  }

  public constructor() {}
}

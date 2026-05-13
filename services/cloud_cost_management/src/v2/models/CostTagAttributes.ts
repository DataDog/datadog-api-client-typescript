import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Cloud Cost Management tag.
 */
export class CostTagAttributes {
  /**
   * List of sources that define this tag.
   */
  "sources": Array<string>;
  /**
   * The tag value in `key:value` format.
   */
  "value": string;
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
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    value: {
      baseName: "value",
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
    return CostTagAttributes.attributeTypeMap;
  }

  public constructor() {}
}

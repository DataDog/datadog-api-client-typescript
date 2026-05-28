import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an AI-generated Cloud Cost Management tag key description.
 */
export class GeneratedCostTagDescriptionAttributes {
  /**
   * The AI-generated description for the tag key.
   */
  "description": string;
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
    description: {
      baseName: "description",
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
    return GeneratedCostTagDescriptionAttributes.attributeTypeMap;
  }

  public constructor() {}
}

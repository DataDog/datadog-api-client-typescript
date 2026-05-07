import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the preferred tags response.
 */
export class CostAIPreferredTagsAttributes {
  /**
   * A contextual message about the preferred tags configuration.
   */
  "message": string;
  /**
   * The list of preferred cost allocation tags.
   */
  "preferredTags": Array<string>;
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
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    preferredTags: {
      baseName: "preferred_tags",
      type: "Array<string>",
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
    return CostAIPreferredTagsAttributes.attributeTypeMap;
  }

  public constructor() {}
}

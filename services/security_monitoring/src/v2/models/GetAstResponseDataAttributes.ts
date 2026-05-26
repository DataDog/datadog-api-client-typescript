import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the get-AST response, containing the parsed abstract syntax tree.
 */
export class GetAstResponseDataAttributes {
  /**
   * The parsed abstract syntax tree as a JSON object.
   */
  "ast": { [key: string]: any };
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
    ast: {
      baseName: "ast",
      type: "{ [key: string]: any; }",
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
    return GetAstResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

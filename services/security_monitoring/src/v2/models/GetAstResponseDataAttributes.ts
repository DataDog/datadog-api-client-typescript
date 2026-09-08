import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AstNode } from "./AstNode";

/**
 * The attributes of the get-AST response, containing the parsed abstract syntax tree.
 */
export class GetAstResponseDataAttributes {
  /**
   * A node in the abstract syntax tree of the parsed source code.
   */
  "result": AstNode;
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
    result: {
      baseName: "result",
      type: "AstNode",
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

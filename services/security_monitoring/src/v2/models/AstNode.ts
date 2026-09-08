import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisPosition } from "./AnalysisPosition";

/**
 * A node in the abstract syntax tree of the parsed source code.
 */
export class AstNode {
  /**
   * The tree-sitter node type of this AST node.
   */
  "astType": string;
  /**
   * The child nodes of this AST node, or null for a leaf node.
   */
  "children": Array<AstNode> | null;
  /**
   * A position in source code, identified by line and column numbers.
   */
  "end": AnalysisPosition;
  /**
   * The name of the field this node occupies within its parent node, when the parent addresses it by name.
   */
  "fieldName"?: string;
  /**
   * A position in source code, identified by line and column numbers.
   */
  "start": AnalysisPosition;
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
    astType: {
      baseName: "ast_type",
      type: "string",
      required: true,
    },
    children: {
      baseName: "children",
      type: "Array<AstNode>",
      required: true,
    },
    end: {
      baseName: "end",
      type: "AnalysisPosition",
      required: true,
    },
    fieldName: {
      baseName: "field_name",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "AnalysisPosition",
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
    return AstNode.attributeTypeMap;
  }

  public constructor() {}
}

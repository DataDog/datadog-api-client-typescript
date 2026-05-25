import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the node types response, containing the list of node type definitions for the requested language.
 */
export class NodeTypesResponseDataAttributes {
  /**
   * The list of tree-sitter node type definitions for the language.
   */
  "nodeTypes": Array<{ [key: string]: any }>;
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
    nodeTypes: {
      baseName: "node_types",
      type: "Array<{ [key: string]: any; }>",
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
    return NodeTypesResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

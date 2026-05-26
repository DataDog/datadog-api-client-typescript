import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NodeTypesResponseData } from "./NodeTypesResponseData";

/**
 * The response payload containing tree-sitter node type definitions for a programming language.
 */
export class NodeTypesResponse {
  /**
   * The primary data object in the node types response.
   */
  "data": NodeTypesResponseData;
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
    data: {
      baseName: "data",
      type: "NodeTypesResponseData",
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
    return NodeTypesResponse.attributeTypeMap;
  }

  public constructor() {}
}

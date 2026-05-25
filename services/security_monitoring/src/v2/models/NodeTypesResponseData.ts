import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NodeTypesResponseDataAttributes } from "./NodeTypesResponseDataAttributes";
import { NodeTypesResponseDataType } from "./NodeTypesResponseDataType";

/**
 * The primary data object in the node types response.
 */
export class NodeTypesResponseData {
  /**
   * The attributes of the node types response, containing the list of node type definitions for the requested language.
   */
  "attributes": NodeTypesResponseDataAttributes;
  /**
   * The unique identifier of the node types response resource.
   */
  "id": string;
  /**
   * Get node types response resource type.
   */
  "type": NodeTypesResponseDataType;
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
      type: "NodeTypesResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NodeTypesResponseDataType",
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
    return NodeTypesResponseData.attributeTypeMap;
  }

  public constructor() {}
}

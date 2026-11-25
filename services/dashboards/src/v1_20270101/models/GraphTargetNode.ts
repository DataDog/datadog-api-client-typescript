import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GraphTargetNodeType } from "./GraphTargetNodeType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GraphTargetNode {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": GraphTargetNodeType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "GraphTargetNodeType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GraphTargetNode.attributeTypeMap;
  }

  public constructor() {}
}

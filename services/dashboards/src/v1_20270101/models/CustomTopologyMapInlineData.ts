import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapInlineEdgesData } from "./CustomTopologyMapInlineEdgesData";
import { CustomTopologyMapInlineNodesData } from "./CustomTopologyMapInlineNodesData";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineData {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "edges"?: CustomTopologyMapInlineEdgesData;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nodes"?: CustomTopologyMapInlineNodesData;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    edges: {
      baseName: "edges",
      type: "CustomTopologyMapInlineEdgesData",
    },
    nodes: {
      baseName: "nodes",
      type: "CustomTopologyMapInlineNodesData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineData.attributeTypeMap;
  }

  public constructor() {}
}

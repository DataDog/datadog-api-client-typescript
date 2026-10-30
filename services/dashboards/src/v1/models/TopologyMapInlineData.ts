import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineEdgesData } from "./TopologyMapInlineEdgesData";
import { TopologyMapInlineNodesData } from "./TopologyMapInlineNodesData";

/**
 * Static nodes and edges, stored in columns. Within a table, every column must have the same number of values and a unique `id`.
 */
export class TopologyMapInlineData {
  /**
   * Table of edges, one row per edge.
   */
  "edges"?: TopologyMapInlineEdgesData;
  /**
   * Table of nodes, one row per node.
   */
  "nodes"?: TopologyMapInlineNodesData;
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
      type: "TopologyMapInlineEdgesData",
    },
    nodes: {
      baseName: "nodes",
      type: "TopologyMapInlineNodesData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapInlineData.attributeTypeMap;
  }

  public constructor() {}
}

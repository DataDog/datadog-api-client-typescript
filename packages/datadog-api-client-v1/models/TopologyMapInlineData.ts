/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineEdgesData } from "./TopologyMapInlineEdgesData";
import { TopologyMapInlineNodesData } from "./TopologyMapInlineNodesData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

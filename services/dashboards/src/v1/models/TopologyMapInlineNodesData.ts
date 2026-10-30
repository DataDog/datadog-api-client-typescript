import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineNodeColumn } from "./TopologyMapInlineNodeColumn";

/**
 * Table of nodes, one row per node.
 */
export class TopologyMapInlineNodesData {
  /**
   * Columns of the nodes table. Must include an `id` column, unless the list is empty (no nodes).
   */
  "columns": Array<TopologyMapInlineNodeColumn>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<TopologyMapInlineNodeColumn>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapInlineNodesData.attributeTypeMap;
  }

  public constructor() {}
}

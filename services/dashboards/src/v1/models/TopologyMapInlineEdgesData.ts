import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineEdgeColumn } from "./TopologyMapInlineEdgeColumn";

/**
 * Table of edges, one row per edge.
 */
export class TopologyMapInlineEdgesData {
  /**
   * Columns of the edges table. Must include one `source` column and one `target` column.
   */
  "columns": Array<TopologyMapInlineEdgeColumn>;
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
      type: "Array<TopologyMapInlineEdgeColumn>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapInlineEdgesData.attributeTypeMap;
  }

  public constructor() {}
}

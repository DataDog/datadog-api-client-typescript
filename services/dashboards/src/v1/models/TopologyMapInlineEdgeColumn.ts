import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineColumnKindString } from "./TopologyMapInlineColumnKindString";
import { TopologyMapInlineEdgeColumnId } from "./TopologyMapInlineEdgeColumnId";

/**
 * Column of edge endpoint node IDs.
 */
export class TopologyMapInlineEdgeColumn {
  /**
   * Edge endpoint the column holds.
   */
  "id": TopologyMapInlineEdgeColumnId;
  /**
   * Column of strings.
   */
  "kind": TopologyMapInlineColumnKindString;
  /**
   * Node IDs.
   */
  "values": Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "TopologyMapInlineEdgeColumnId",
      required: true,
    },
    kind: {
      baseName: "kind",
      type: "TopologyMapInlineColumnKindString",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapInlineEdgeColumn.attributeTypeMap;
  }

  public constructor() {}
}

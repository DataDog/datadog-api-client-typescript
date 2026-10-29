import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineColumnKindString } from "./TopologyMapInlineColumnKindString";
import { TopologyMapInlineNodeIdColumnId } from "./TopologyMapInlineNodeIdColumnId";

/**
 * Column of node IDs.
 */
export class TopologyMapInlineNodeIdColumn {
  /**
   * ID of the node ID column.
   */
  "id": TopologyMapInlineNodeIdColumnId;
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
      type: "TopologyMapInlineNodeIdColumnId",
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
    return TopologyMapInlineNodeIdColumn.attributeTypeMap;
  }

  public constructor() {}
}

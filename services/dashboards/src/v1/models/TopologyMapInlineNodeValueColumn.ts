import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapInlineColumnKindScalar } from "./TopologyMapInlineColumnKindScalar";
import { TopologyMapInlineNodeValueColumnMeta } from "./TopologyMapInlineNodeValueColumnMeta";

/**
 * Column of numeric node values. Nodes display non-null values in order of column `id`.
 */
export class TopologyMapInlineNodeValueColumn {
  /**
   * Position of the value in the node, as `values[N]`. The smallest N appears first.
   */
  "id": string;
  /**
   * Column of numbers.
   */
  "kind": TopologyMapInlineColumnKindScalar;
  /**
   * Display options for a value column.
   */
  "meta"?: TopologyMapInlineNodeValueColumnMeta;
  /**
   * Value for each node. Null values are not displayed.
   */
  "values": Array<number | null>;
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
      type: "string",
      required: true,
    },
    kind: {
      baseName: "kind",
      type: "TopologyMapInlineColumnKindScalar",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "TopologyMapInlineNodeValueColumnMeta",
    },
    values: {
      baseName: "values",
      type: "Array<number>",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapInlineNodeValueColumn.attributeTypeMap;
  }

  public constructor() {}
}

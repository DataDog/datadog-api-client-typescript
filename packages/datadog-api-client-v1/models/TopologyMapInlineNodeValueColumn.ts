/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineColumnKindScalar } from "./TopologyMapInlineColumnKindScalar";
import { TopologyMapInlineNodeValueColumnMeta } from "./TopologyMapInlineNodeValueColumnMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineColumnKindString } from "./TopologyMapInlineColumnKindString";
import { TopologyMapInlineNodeIdColumnId } from "./TopologyMapInlineNodeIdColumnId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

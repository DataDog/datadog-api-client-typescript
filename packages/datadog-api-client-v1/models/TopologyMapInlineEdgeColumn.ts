/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineColumnKindString } from "./TopologyMapInlineColumnKindString";
import { TopologyMapInlineEdgeColumnId } from "./TopologyMapInlineEdgeColumnId";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineEdgeColumn } from "./TopologyMapInlineEdgeColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

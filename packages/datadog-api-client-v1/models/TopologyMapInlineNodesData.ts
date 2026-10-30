/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapInlineNodeColumn } from "./TopologyMapInlineNodeColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

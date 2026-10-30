/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Mapping from one result column to one node field.
 */
export class TopologyRequestCustomProjectionDimension {
  /**
   * Column name from the result. Must be a group-by tag key or a formula.
   */
  "column": string;
  /**
   * Node field that receives the column's value: `id`, `title`, `subtitle`, or `values[N]` for the value at position N. When `id` is not set, each node's ID is derived from the group-by tags (for example, `env:prod,service:web`). When `title` is not set, the title is the node's ID. When several rows set the same non-`id` field on a node, the last non-null value wins.
   */
  "dimension": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    dimension: {
      baseName: "dimension",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyRequestCustomProjectionDimension.attributeTypeMap;
  }

  public constructor() {}
}

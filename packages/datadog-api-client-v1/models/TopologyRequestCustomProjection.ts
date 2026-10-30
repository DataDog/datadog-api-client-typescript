/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyRequestCustomProjectionDimension } from "./TopologyRequestCustomProjectionDimension";
import { TopologyRequestCustomProjectionType } from "./TopologyRequestCustomProjectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Mapping from result columns to node fields. Each result row feeds one node.
 */
export class TopologyRequestCustomProjection {
  /**
   * List of mappings from a result column to a node field. Each `dimension` must be unique.
   */
  "dimensions": Array<TopologyRequestCustomProjectionDimension>;
  /**
   * Projection type. Each result row is a node.
   */
  "type": TopologyRequestCustomProjectionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<TopologyRequestCustomProjectionDimension>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TopologyRequestCustomProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyRequestCustomProjection.attributeTypeMap;
  }

  public constructor() {}
}

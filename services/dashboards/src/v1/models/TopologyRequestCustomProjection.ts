import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyRequestCustomProjectionDimension } from "./TopologyRequestCustomProjectionDimension";
import { TopologyRequestCustomProjectionType } from "./TopologyRequestCustomProjectionType";

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

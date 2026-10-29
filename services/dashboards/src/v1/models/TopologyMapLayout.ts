import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyMapLayoutDirection } from "./TopologyMapLayoutDirection";
import { TopologyMapLayoutType } from "./TopologyMapLayoutType";

/**
 * Algorithm that positions nodes and edges. The `hierarchical` layout places nodes in ranks so edges flow in one direction.
 */
export class TopologyMapLayout {
  /**
   * Direction of ranks. For example, `top-to-bottom` places first-rank nodes at the top and last-rank nodes at the bottom.
   */
  "direction": TopologyMapLayoutDirection;
  /**
   * Type of layout algorithm.
   */
  "type": TopologyMapLayoutType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    direction: {
      baseName: "direction",
      type: "TopologyMapLayoutDirection",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TopologyMapLayoutType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyMapLayout.attributeTypeMap;
  }

  public constructor() {}
}

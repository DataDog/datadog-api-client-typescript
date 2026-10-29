/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapLayoutDirection } from "./TopologyMapLayoutDirection";
import { TopologyMapLayoutType } from "./TopologyMapLayoutType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

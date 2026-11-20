import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SplitConfigSortOrder } from "./SplitConfigSortOrder";
import { SplitSortCompute } from "./SplitSortCompute";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SplitConfigSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute"?: SplitSortCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": SplitConfigSortOrder;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "SplitSortCompute",
    },
    order: {
      baseName: "order",
      type: "SplitConfigSortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitConfigSort.attributeTypeMap;
  }

  public constructor() {}
}

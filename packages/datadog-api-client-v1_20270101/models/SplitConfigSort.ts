/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SplitConfigSortOrder } from "./SplitConfigSortOrder";
import { SplitSortCompute } from "./SplitSortCompute";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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

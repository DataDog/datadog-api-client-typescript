/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SplitConfigSortCompute } from "./SplitConfigSortCompute";
import { WidgetSort } from "./WidgetSort";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Controls the order in which graphs appear in the split.
 */
export class SplitSort {
  /**
   * Defines the metric and aggregation used as the sort value.
   */
  "compute"?: SplitConfigSortCompute;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;

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
      type: "SplitConfigSortCompute",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitSort.attributeTypeMap;
  }

  public constructor() {}
}

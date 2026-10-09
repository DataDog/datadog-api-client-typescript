/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridNestingDisplay } from "./HeatgridNestingDisplay";
import { HeatgridSortBy } from "./HeatgridSortBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Ordering of the heatgrid rows.
 */
export class HeatgridSort {
  /**
   * Display groups as flat rows.
   */
  "nestingDisplay": HeatgridNestingDisplay;
  /**
   * Sort rows by aggregated value or group label.
   */
  "sortBy": HeatgridSortBy;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    nestingDisplay: {
      baseName: "nesting_display",
      type: "HeatgridNestingDisplay",
      required: true,
    },
    sortBy: {
      baseName: "sort_by",
      type: "HeatgridSortBy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSort.attributeTypeMap;
  }

  public constructor() {}
}

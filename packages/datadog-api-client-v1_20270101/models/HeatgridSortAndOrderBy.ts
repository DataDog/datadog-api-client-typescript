/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlatSortBy } from "./FlatSortBy";
import { HeatgridSortAndOrderByNestingDisplay } from "./HeatgridSortAndOrderByNestingDisplay";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridSortAndOrderBy {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "nestingDisplay": HeatgridSortAndOrderByNestingDisplay;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sortBy": FlatSortBy;

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
      type: "HeatgridSortAndOrderByNestingDisplay",
      required: true,
    },
    sortBy: {
      baseName: "sort_by",
      type: "FlatSortBy",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSortAndOrderBy.attributeTypeMap;
  }

  public constructor() {}
}

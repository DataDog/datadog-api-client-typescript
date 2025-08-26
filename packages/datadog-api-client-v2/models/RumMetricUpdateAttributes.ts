/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumMetricFilter } from "./RumMetricFilter";
import { RumMetricGroupBy } from "./RumMetricGroupBy";
import { RumMetricUpdateCompute } from "./RumMetricUpdateCompute";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The rum-based metric properties that will be updated.
 */
export class RumMetricUpdateAttributes {
  /**
   * The compute rule to compute the rum-based metric.
   */
  "compute"?: RumMetricUpdateCompute;
  /**
   * The rum-based metric filter. Events matching this filter will be aggregated in this metric.
   */
  "filter"?: RumMetricFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<RumMetricGroupBy>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "RumMetricUpdateCompute",
    },
    filter: {
      baseName: "filter",
      type: "RumMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RumMetricGroupBy>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumMetricUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}

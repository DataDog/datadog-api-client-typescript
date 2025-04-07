import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricFilter } from "./RumMetricFilter";
import { RumMetricGroupBy } from "./RumMetricGroupBy";
import { RumMetricUpdateCompute } from "./RumMetricUpdateCompute";

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
      type: "any",
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

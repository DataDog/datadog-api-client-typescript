import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricFilter } from "./RUMMetricFilter";
import { RUMMetricGroupBy } from "./RUMMetricGroupBy";
import { RUMMetricUpdateCompute } from "./RUMMetricUpdateCompute";

/**
 * The RUM-based metric properties to update. Omitted properties keep their current value.
 */
export class RUMMetricUpdateAttributes {
  /**
   * The compute rule properties that can be updated. Only valid for metrics whose `aggregation_type` is `distribution`.
   */
  "compute"?: RUMMetricUpdateCompute;
  /**
   * The RUM-based metric filter. Events matching this filter are aggregated in this metric. The `event_type` filter is added automatically.
   */
  "filter"?: RUMMetricFilter;
  /**
   * The rules to group the metric by. When provided, replaces all the existing group by rules.
   */
  "groupBy"?: Array<RUMMetricGroupBy>;
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
      type: "RUMMetricUpdateCompute",
    },
    filter: {
      baseName: "filter",
      type: "RUMMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RUMMetricGroupBy>",
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
    return RUMMetricUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}

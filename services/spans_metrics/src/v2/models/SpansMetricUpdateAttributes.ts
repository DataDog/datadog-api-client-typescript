import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricFilter } from "./SpansMetricFilter";
import { SpansMetricGroupBy } from "./SpansMetricGroupBy";
import { SpansMetricUpdateCompute } from "./SpansMetricUpdateCompute";

/**
 * The span-based metric properties that will be updated.
 */
export class SpansMetricUpdateAttributes {
  /**
   * The compute rule to compute the span-based metric.
   */
  "compute"?: SpansMetricUpdateCompute;
  /**
   * The span-based metric filter. Spans matching this filter will be aggregated in this metric.
   */
  "filter"?: SpansMetricFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<SpansMetricGroupBy>;
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
      type: "SpansMetricUpdateCompute",
    },
    filter: {
      baseName: "filter",
      type: "SpansMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<SpansMetricGroupBy>",
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
    return SpansMetricUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}

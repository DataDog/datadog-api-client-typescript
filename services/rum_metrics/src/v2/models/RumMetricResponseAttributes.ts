import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricEventType } from "./RumMetricEventType";
import { RumMetricResponseCompute } from "./RumMetricResponseCompute";
import { RumMetricResponseFilter } from "./RumMetricResponseFilter";
import { RumMetricResponseGroupBy } from "./RumMetricResponseGroupBy";
import { RumMetricResponseUniqueness } from "./RumMetricResponseUniqueness";

/**
 * The object describing a Datadog rum-based metric.
 */
export class RumMetricResponseAttributes {
  /**
   * The compute rule to compute the rum-based metric.
   */
  "compute"?: RumMetricResponseCompute;
  /**
   * The type of RUM events to filter on.
   */
  "eventType"?: RumMetricEventType;
  /**
   * The rum-based metric filter. RUM events matching this filter will be aggregated in this metric.
   */
  "filter"?: RumMetricResponseFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<RumMetricResponseGroupBy>;
  /**
   * The rule to count updatable events. Is only set if `event_type` is `session` or `view`.
   */
  "uniqueness"?: RumMetricResponseUniqueness;
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
      type: "RumMetricResponseCompute",
    },
    eventType: {
      baseName: "event_type",
      type: "RumMetricEventType",
    },
    filter: {
      baseName: "filter",
      type: "RumMetricResponseFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RumMetricResponseGroupBy>",
    },
    uniqueness: {
      baseName: "uniqueness",
      type: "RumMetricResponseUniqueness",
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
    return RumMetricResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}

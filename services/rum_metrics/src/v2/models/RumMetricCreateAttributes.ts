import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricCompute } from "./RumMetricCompute";
import { RumMetricEventType } from "./RumMetricEventType";
import { RumMetricFilter } from "./RumMetricFilter";
import { RumMetricGroupBy } from "./RumMetricGroupBy";
import { RumMetricUniqueness } from "./RumMetricUniqueness";

/**
 * The object describing the Datadog RUM-based metric to create.
 */
export class RumMetricCreateAttributes {
  /**
   * The compute rule to compute the RUM-based metric. It is set at creation and only `include_percentiles` can be updated afterwards.
   */
  "compute": RumMetricCompute;
  /**
   * The type of RUM events the metric is generated from. It is set at creation and cannot be changed.
   */
  "eventType": RumMetricEventType;
  /**
   * The RUM-based metric filter. Events matching this filter will be aggregated in this metric. The `event_type` filter is added automatically.
   */
  "filter"?: RumMetricFilter;
  /**
   * The rules to group the metric by. Each rule creates a tag on the generated metric. If omitted, the metric is not grouped.
   */
  "groupBy"?: Array<RumMetricGroupBy>;
  /**
   * The rule to count updatable events.
   * Required when `event_type` is `session` or `view`, and must be omitted for other event types. It cannot be changed after creation.
   */
  "uniqueness"?: RumMetricUniqueness;
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
      type: "RumMetricCompute",
      required: true,
    },
    eventType: {
      baseName: "event_type",
      type: "RumMetricEventType",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "RumMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RumMetricGroupBy>",
    },
    uniqueness: {
      baseName: "uniqueness",
      type: "RumMetricUniqueness",
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
    return RumMetricCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}

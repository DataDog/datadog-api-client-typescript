import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricCompute } from "./RUMMetricCompute";
import { RUMMetricEventType } from "./RUMMetricEventType";
import { RUMMetricFilter } from "./RUMMetricFilter";
import { RUMMetricGroupBy } from "./RUMMetricGroupBy";
import { RUMMetricUniqueness } from "./RUMMetricUniqueness";

/**
 * The object describing the Datadog RUM-based metric to create.
 */
export class RUMMetricCreateAttributes {
  /**
   * The compute rule to compute the RUM-based metric. It is set at creation and only `include_percentiles` can be updated afterward.
   */
  "compute": RUMMetricCompute;
  /**
   * The type of RUM events the metric is generated from. It is set at creation and cannot be changed.
   */
  "eventType": RUMMetricEventType;
  /**
   * The RUM-based metric filter. Events matching this filter are aggregated in this metric. The `event_type` filter is added automatically.
   */
  "filter"?: RUMMetricFilter;
  /**
   * The rules to group the metric by. Each rule creates a tag on the generated metric. If omitted, the metric is not grouped.
   */
  "groupBy"?: Array<RUMMetricGroupBy>;
  /**
   * The rule to count updatable events.
   * Required when `event_type` is `session` or `view`, and must be omitted for other event types. It cannot be changed after creation.
   */
  "uniqueness"?: RUMMetricUniqueness;
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
      type: "RUMMetricCompute",
      required: true,
    },
    eventType: {
      baseName: "event_type",
      type: "RUMMetricEventType",
      required: true,
    },
    filter: {
      baseName: "filter",
      type: "RUMMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RUMMetricGroupBy>",
    },
    uniqueness: {
      baseName: "uniqueness",
      type: "RUMMetricUniqueness",
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
    return RUMMetricCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}

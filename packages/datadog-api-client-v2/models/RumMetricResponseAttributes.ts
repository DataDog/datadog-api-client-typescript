/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumMetricEventType } from "./RumMetricEventType";
import { RumMetricResponseCompute } from "./RumMetricResponseCompute";
import { RumMetricResponseFilter } from "./RumMetricResponseFilter";
import { RumMetricResponseGroupBy } from "./RumMetricResponseGroupBy";
import { RumMetricResponseUniqueness } from "./RumMetricResponseUniqueness";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a Datadog RUM-based metric.
 */
export class RumMetricResponseAttributes {
  /**
   * The compute rule of the RUM-based metric.
   */
  "compute"?: RumMetricResponseCompute;
  /**
   * The type of RUM events the metric is generated from. It is set at creation and cannot be changed.
   */
  "eventType"?: RumMetricEventType;
  /**
   * The RUM-based metric filter. RUM events matching this filter are aggregated in this metric. Omitted if the metric only filters on the event type.
   */
  "filter"?: RumMetricResponseFilter;
  /**
   * The rules the metric is grouped by. Omitted if the metric is not grouped.
   */
  "groupBy"?: Array<RumMetricResponseGroupBy>;
  /**
   * The rule to count updatable events. Only present if `event_type` is `session` or `view`, and absent on older metrics created before this setting existed.
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

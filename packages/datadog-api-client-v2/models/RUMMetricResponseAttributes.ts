/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMMetricEventType } from "./RUMMetricEventType";
import { RUMMetricResponseCompute } from "./RUMMetricResponseCompute";
import { RUMMetricResponseFilter } from "./RUMMetricResponseFilter";
import { RUMMetricResponseGroupBy } from "./RUMMetricResponseGroupBy";
import { RUMMetricResponseUniqueness } from "./RUMMetricResponseUniqueness";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a Datadog RUM-based metric.
 */
export class RUMMetricResponseAttributes {
  /**
   * The compute rule of the RUM-based metric.
   */
  "compute"?: RUMMetricResponseCompute;
  /**
   * The type of RUM events the metric is generated from. It is set at creation and cannot be changed.
   */
  "eventType"?: RUMMetricEventType;
  /**
   * The RUM-based metric filter. RUM events matching this filter are aggregated in this metric. Omitted if the metric only filters on the event type.
   */
  "filter"?: RUMMetricResponseFilter;
  /**
   * The rules the metric is grouped by. An empty array is returned if the metric is not grouped.
   */
  "groupBy"?: Array<RUMMetricResponseGroupBy>;
  /**
   * The rule to count updatable events. Only present if `event_type` is `session` or `view`, and absent on older metrics created before this setting existed.
   */
  "uniqueness"?: RUMMetricResponseUniqueness;

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
      type: "RUMMetricResponseCompute",
    },
    eventType: {
      baseName: "event_type",
      type: "RUMMetricEventType",
    },
    filter: {
      baseName: "filter",
      type: "RUMMetricResponseFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<RUMMetricResponseGroupBy>",
    },
    uniqueness: {
      baseName: "uniqueness",
      type: "RUMMetricResponseUniqueness",
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
    return RUMMetricResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}

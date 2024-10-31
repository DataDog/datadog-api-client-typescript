/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumMetricCompute } from "./RumMetricCompute";
import { RumMetricEventType } from "./RumMetricEventType";
import { RumMetricFilter } from "./RumMetricFilter";
import { RumMetricGroupBy } from "./RumMetricGroupBy";
import { RumMetricUniqueness } from "./RumMetricUniqueness";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing the Datadog rum-based metric to create.
 */
export class RumMetricCreateAttributes {
  /**
   * The compute rule to compute the rum-based metric.
   */
  "compute": RumMetricCompute;
  /**
   * The type of RUM events to filter on.
   */
  "eventType": RumMetricEventType;
  /**
   * The rum-based metric filter. Events matching this filter will be aggregated in this metric.
   */
  "filter"?: RumMetricFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<RumMetricGroupBy>;
  /**
   * The rule to count updatable events. Is only set if "event_type" is "sessions" or "views".
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
      type: "any",
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

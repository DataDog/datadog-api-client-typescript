/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarInterval } from "./CalendarInterval";
import { EventsAggregation } from "./EventsAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The instructions for what to compute for this query.
 */
export class EventsCompute {
  /**
   * The type of aggregation that can be performed on events-based queries.
   */
  "aggregation": EventsAggregation;
  /**
   * Fixed numeric interval for compute (in milliseconds).
   * Fields `interval` (numeric interval) and `rollup` (calendar interval) are mutually exclusive.
   */
  "interval"?: number;
  /**
   * The "measure" attribute on which to perform the computation.
   */
  "metric"?: string;
  /**
   * Calendar interval options for compute.
   * Fields `interval` (numeric interval) and `rollup` (calendar interval) are mutually exclusive.
   *
   * For instance:
   * - { type: 'day', alignment: '1pm', timezone: 'Europe/Paris' }
   * - { type: 'week', alignment: 'tuesday', quantity: 2 }
   * - { type: 'month', alignment: '15th' }
   * - { type: 'year', alignment: 'april' }
   */
  "rollup"?: CalendarInterval;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "EventsAggregation",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    rollup: {
      baseName: "rollup",
      type: "CalendarInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsCompute.attributeTypeMap;
  }

  public constructor() {}
}

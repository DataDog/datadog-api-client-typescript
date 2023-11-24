/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarInterval } from "./CalendarInterval";
import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Compute options.
 */
export class FormulaAndFunctionEventQueryDefinitionCompute {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * Fixed numeric interval for compute (in milliseconds).
   * Fields `interval` (numeric interval) and `rollup` (calendar interval) are mutually exclusive.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
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
      type: "FormulaAndFunctionEventAggregation",
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
    return FormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
  }

  public constructor() {}
}

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarInterval } from "./CalendarInterval";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Define computation for a log query.
 */
export class LogsQueryCompute {
  /**
   * The aggregation method.
   */
  "aggregation": string;
  /**
   * Facet name.
   */
  "facet"?: string;
  /**
   * Fixed numeric interval for compute (in milliseconds).
   * Fields `interval` (numeric interval) and `rollup` (calendar interval) are mutually exclusive.
   */
  "interval"?: number;
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
      type: "string",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
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
    return LogsQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}

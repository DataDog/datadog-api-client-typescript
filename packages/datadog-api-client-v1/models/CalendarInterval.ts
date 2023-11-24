/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalendarIntervalType } from "./CalendarIntervalType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
export class CalendarInterval {
  /**
   * Optional alignment to define period start.
   * Its possible values depend on the type field:
   *
   * - day: start hour of day as 12 or 24-hr format (for instance: 11pm, 3am, 15)
   * - week: first day of the week (for instance: tuesday, note the lowercase)
   * - month: first day of month (for instance: 1th, 2nd, 23th)
   * - year: first month of the year (for instance: april, note the lowercase)
   */
  "alignment"?: string;
  /**
   * Optional integer to specify how many units to group together.
   */
  "quantity"?: number;
  /**
   * Optional timezone to define the calendar interval.
   */
  "timezone"?: string;
  /**
   * Type of calendar interval (day, week, etc.).
   */
  "type": CalendarIntervalType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alignment: {
      baseName: "alignment",
      type: "string",
    },
    quantity: {
      baseName: "quantity",
      type: "number",
      format: "int64",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CalendarIntervalType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarInterval.attributeTypeMap;
  }

  public constructor() {}
}

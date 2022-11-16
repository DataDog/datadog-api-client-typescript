/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardReportScheduleFrequency } from "./DashboardReportScheduleFrequency";
import { DashboardReportScheduleRepeatAt } from "./DashboardReportScheduleRepeatAt";
import { DashboardReportScheduleRepeatOnDayOfMonth } from "./DashboardReportScheduleRepeatOnDayOfMonth";
import { DashboardReportScheduleRepeatOnDayOfWeek } from "./DashboardReportScheduleRepeatOnDayOfWeek";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Report schedule-specific configuration that defines when and how often a report is sent.
 */
export class DashboardReportSchedule {
  /**
   * Enables or disables automatic report sending as configured in the report's schedule. If set to `false`, schedule is paused and reports are not sent.
   */
  "active"?: boolean;
  /**
   * Frequency with which to send the report.
   */
  "frequency"?: DashboardReportScheduleFrequency;
  /**
   * ISO8601 formatted time (HH:MM) to send the report, using the time zone specified in the `timezone` field.
   */
  "repeatAt"?: DashboardReportScheduleRepeatAt;
  /**
   * Defines which day of the month to send the monthly report. If the frequency field uses months (for example, `1mo`), this field is required. If the frequency field does not use months (for example `1d`, `1w`), then this field must be `null` (if provided). If this field is not provided in an update request, and the update request changes the frequency to use days or weeks (for example, `1d`, `1w`), then this field is automatically set to `null`. This field is mutually exclusive with `repeat_on_day_of_week`, and cannot be defined in the same request that includes a non-null value for `repeat_on_day_of_week`.
   */
  "repeatOnDayOfMonth"?: DashboardReportScheduleRepeatOnDayOfMonth;
  /**
   * Defines which day of the week to send the weekly report. If the frequency field uses weeks (such as `1w`), this field is required and defines which day of the week to send the report. If the frequency field does not use weeks (for example, `1d`, `1mo`), then this field must be `null` (if provided). If this field is not provided in an update request, and the update request changes the frequency to use days or months (for example, `1d`, `1mo`), then this field is automatically set to `null`.  This field is mutually exclusive with `repeat_on_day_of_month` and cannot be defined in the same request that includes a non-null value for `repeat_on_day_of_month`.
   */
  "repeatOnDayOfWeek"?: DashboardReportScheduleRepeatOnDayOfWeek;
  /**
   * Time zone to use for repeat_at. Must be a valid Time Zone Database (https://www.iana.org/time-zones) name
   */
  "timezone"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    active: {
      baseName: "active",
      type: "boolean",
    },
    frequency: {
      baseName: "frequency",
      type: "DashboardReportScheduleFrequency",
    },
    repeatAt: {
      baseName: "repeat_at",
      type: "DashboardReportScheduleRepeatAt",
    },
    repeatOnDayOfMonth: {
      baseName: "repeat_on_day_of_month",
      type: "DashboardReportScheduleRepeatOnDayOfMonth",
    },
    repeatOnDayOfWeek: {
      baseName: "repeat_on_day_of_week",
      type: "DashboardReportScheduleRepeatOnDayOfWeek",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardReportSchedule.attributeTypeMap;
  }

  public constructor() {}
}

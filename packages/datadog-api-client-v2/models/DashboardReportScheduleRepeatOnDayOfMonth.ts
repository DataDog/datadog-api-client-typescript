/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type DashboardReportScheduleRepeatOnDayOfMonth =
  | typeof DASHBOARD_REPORT_SCHEDULE_REPEAT_ON_DAY_OF_MONTH_1ST
  | typeof DASHBOARD_REPORT_SCHEDULE_REPEAT_ON_DAY_OF_MONTH_15TH;
export const DASHBOARD_REPORT_SCHEDULE_REPEAT_ON_DAY_OF_MONTH_1ST = "1st";
export const DASHBOARD_REPORT_SCHEDULE_REPEAT_ON_DAY_OF_MONTH_15TH = "15th";

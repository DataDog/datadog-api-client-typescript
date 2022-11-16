/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type DashboardReportTimeframe =
  | typeof DASHBOARD_REPORT_TIMEFRAME_5M
  | typeof DASHBOARD_REPORT_TIMEFRAME_15M
  | typeof DASHBOARD_REPORT_TIMEFRAME_30M
  | typeof DASHBOARD_REPORT_TIMEFRAME_1H
  | typeof DASHBOARD_REPORT_TIMEFRAME_4H
  | typeof DASHBOARD_REPORT_TIMEFRAME_1D
  | typeof DASHBOARD_REPORT_TIMEFRAME_2D
  | typeof DASHBOARD_REPORT_TIMEFRAME_1W
  | typeof DASHBOARD_REPORT_TIMEFRAME_1MO;
export const DASHBOARD_REPORT_TIMEFRAME_5M = "5m";
export const DASHBOARD_REPORT_TIMEFRAME_15M = "15m";
export const DASHBOARD_REPORT_TIMEFRAME_30M = "30m";
export const DASHBOARD_REPORT_TIMEFRAME_1H = "1h";
export const DASHBOARD_REPORT_TIMEFRAME_4H = "4h";
export const DASHBOARD_REPORT_TIMEFRAME_1D = "1d";
export const DASHBOARD_REPORT_TIMEFRAME_2D = "2d";
export const DASHBOARD_REPORT_TIMEFRAME_1W = "1w";
export const DASHBOARD_REPORT_TIMEFRAME_1MO = "1mo";

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * What to display on the widget.
 */

export type WidgetMonitorSummaryDisplayFormat =
  | typeof COUNTS
  | typeof COUNTS_AND_LIST
  | typeof LIST;
export const COUNTS = "counts";
export const COUNTS_AND_LIST = "countsAndList";
export const LIST = "list";

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Whether to display the Alert Graph as a timeseries or a top list.
 */

export type WidgetVizType = typeof TIMESERIES | typeof TOPLIST;
export const TIMESERIES = "timeseries";
export const TOPLIST = "toplist";

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Define how you want the SLO to be displayed.
 */

export type WidgetViewMode = typeof OVERALL | typeof COMPONENT | typeof BOTH;
export const OVERALL = "overall";
export const COMPONENT = "component";
export const BOTH = "both";

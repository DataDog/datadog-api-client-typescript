/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Whether to show the legend inline or let it be automatically generated.
 */

export type SunburstWidgetLegendInlineAutomaticType =
  | typeof INLINE
  | typeof AUTOMATIC;
export const INLINE = "inline";
export const AUTOMATIC = "automatic";

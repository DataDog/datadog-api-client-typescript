/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

/**
 * Dimension of the Scatterplot.
 */

export type ScatterplotDimension =
  | typeof X
  | typeof Y
  | typeof RADIUS
  | typeof COLOR;
export const X = "x";
export const Y = "y";
export const RADIUS = "radius";
export const COLOR = "color";

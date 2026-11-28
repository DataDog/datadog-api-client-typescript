/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type ScatterPlotDimension =
  | typeof COLOR
  | typeof X
  | typeof Y
  | typeof RADIUS
  | UnparsedObject;
export const COLOR = "color";
export const X = "x";
export const Y = "y";
export const RADIUS = "radius";

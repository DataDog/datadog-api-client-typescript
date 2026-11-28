/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type WidgetDisplayType =
  | typeof OVERLAY
  | typeof AREA
  | typeof LINE
  | typeof BARS
  | typeof ADJACENT_BARS
  | UnparsedObject;
export const OVERLAY = "overlay";
export const AREA = "area";
export const LINE = "line";
export const BARS = "bars";
export const ADJACENT_BARS = "adjacent_bars";

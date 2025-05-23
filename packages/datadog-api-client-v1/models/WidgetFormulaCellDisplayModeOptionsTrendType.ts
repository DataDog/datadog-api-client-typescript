/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Trend type for the cell display mode options.
 */

export type WidgetFormulaCellDisplayModeOptionsTrendType =
  | typeof AREA
  | typeof LINE
  | typeof BARS
  | UnparsedObject;
export const AREA = "area";
export const LINE = "line";
export const BARS = "bars";

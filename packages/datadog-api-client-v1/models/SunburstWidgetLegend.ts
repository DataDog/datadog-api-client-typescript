/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstWidgetLegendInlineAutomatic } from "./SunburstWidgetLegendInlineAutomatic";
import { SunburstWidgetLegendTable } from "./SunburstWidgetLegendTable";

import { UnparsedObject } from "../util";

/**
 * Configuration of the legend.
 */

export type SunburstWidgetLegend =
  | SunburstWidgetLegendTable
  | SunburstWidgetLegendInlineAutomatic
  | UnparsedObject;

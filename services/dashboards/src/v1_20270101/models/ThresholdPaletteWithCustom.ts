import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardInlineSchema49 } from "./DashboardInlineSchema49";
import { ThresholdPalette } from "./ThresholdPalette";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ThresholdPaletteWithCustom =
  | ThresholdPalette
  | DashboardInlineSchema49
  | UnparsedObject;

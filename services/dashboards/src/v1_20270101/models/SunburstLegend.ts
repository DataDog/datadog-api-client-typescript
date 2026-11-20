import { UnparsedObject } from "@datadog/datadog-api-client";

import { SunburstKnownLegend } from "./SunburstKnownLegend";
import { SunburstLegend20270101OneOf } from "./SunburstLegend20270101OneOf";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SunburstLegend =
  | SunburstLegend20270101OneOf
  | SunburstKnownLegend
  | UnparsedObject;

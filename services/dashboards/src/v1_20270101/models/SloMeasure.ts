import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardInlineSchema46 } from "./DashboardInlineSchema46";
import { SloMeasureEvents } from "./SloMeasureEvents";
import { SloMeasureMinutes } from "./SloMeasureMinutes";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SloMeasure =
  | DashboardInlineSchema46
  | SloMeasureEvents
  | SloMeasureMinutes
  | UnparsedObject;

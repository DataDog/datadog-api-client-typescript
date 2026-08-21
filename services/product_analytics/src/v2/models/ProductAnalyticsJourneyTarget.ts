import { UnparsedObject } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyNodeTarget } from "./ProductAnalyticsJourneyNodeTarget";
import { ProductAnalyticsJourneyPathTarget } from "./ProductAnalyticsJourneyPathTarget";

/**
 * A reference to a step, or a range of steps, in the journey.
 * Use a `node` target to name a single step, or a `path` target to name the range
 * between two steps.
 */
export type ProductAnalyticsJourneyTarget =
  | ProductAnalyticsJourneyNodeTarget
  | ProductAnalyticsJourneyPathTarget
  | UnparsedObject;

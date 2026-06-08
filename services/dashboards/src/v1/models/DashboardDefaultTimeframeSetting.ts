import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardFixedTimeframe } from "./DashboardFixedTimeframe";
import { DashboardLiveTimeframe } from "./DashboardLiveTimeframe";

/**
 * The default timeframe applied when opening the dashboard. Set to `null` to clear the dashboard's default timeframe.
 */
export type DashboardDefaultTimeframeSetting =
  | DashboardLiveTimeframe
  | DashboardFixedTimeframe
  | UnparsedObject;

import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardInlineSchema43 } from "./DashboardInlineSchema43";
import { TimeSpan } from "./TimeSpan";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type LegacyLiveSpan =
  | TimeSpan
  | DashboardInlineSchema43
  | UnparsedObject;

import { UnparsedObject } from "@datadog/datadog-api-client";

import { DashboardInlineSchema11 } from "./DashboardInlineSchema11";
import { EventsAggregator } from "./EventsAggregator";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DatasetCompute20270101Aggregation =
  | DashboardInlineSchema11
  | EventsAggregator
  | UnparsedObject;

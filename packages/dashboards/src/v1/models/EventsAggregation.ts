import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { EventsAggregationValue } from "./EventsAggregationValue";

/**
 * The type of aggregation that can be performed on events-based queries.
 */
export type EventsAggregation =
  | EventsAggregationValue
  | string
  | UnparsedObject;

import { UnparsedObject } from "@datadog/datadog-api-client";

import { EventsScalarQuery } from "./EventsScalarQuery";
import { MetricsScalarQuery } from "./MetricsScalarQuery";

/**
 * An individual scalar query to one of the basic Datadog data sources.
 */
export type ScalarQuery =
  | MetricsScalarQuery
  | EventsScalarQuery
  | UnparsedObject;

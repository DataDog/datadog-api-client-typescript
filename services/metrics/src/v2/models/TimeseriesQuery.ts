import { UnparsedObject } from "@datadog/datadog-api-client";

import { EventsTimeseriesQuery } from "./EventsTimeseriesQuery";
import { MetricsTimeseriesQuery } from "./MetricsTimeseriesQuery";

/**
 * An individual timeseries query to one of the basic Datadog data sources.
 */
export type TimeseriesQuery =
  | MetricsTimeseriesQuery
  | EventsTimeseriesQuery
  | UnparsedObject;

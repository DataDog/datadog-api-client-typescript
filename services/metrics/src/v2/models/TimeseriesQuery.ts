import { UnparsedObject } from "@datadog/datadog-api-client";

import { ApmDependencyStatsQuery } from "./ApmDependencyStatsQuery";
import { ApmMetricsQuery } from "./ApmMetricsQuery";
import { ApmResourceStatsQuery } from "./ApmResourceStatsQuery";
import { ContainerTimeseriesQuery } from "./ContainerTimeseriesQuery";
import { EventsTimeseriesQuery } from "./EventsTimeseriesQuery";
import { MetricsTimeseriesQuery } from "./MetricsTimeseriesQuery";
import { ProcessTimeseriesQuery } from "./ProcessTimeseriesQuery";
import { SloQuery } from "./SloQuery";

/**
 * An individual timeseries query to one of the basic Datadog data sources.
 */
export type TimeseriesQuery =
  | MetricsTimeseriesQuery
  | EventsTimeseriesQuery
  | ApmResourceStatsQuery
  | ApmMetricsQuery
  | ApmDependencyStatsQuery
  | SloQuery
  | ProcessTimeseriesQuery
  | ContainerTimeseriesQuery
  | UnparsedObject;

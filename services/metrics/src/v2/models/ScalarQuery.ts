import { UnparsedObject } from "@datadog/datadog-api-client";

import { ApmDependencyStatsQuery } from "./ApmDependencyStatsQuery";
import { ApmMetricsQuery } from "./ApmMetricsQuery";
import { ApmResourceStatsQuery } from "./ApmResourceStatsQuery";
import { ContainerScalarQuery } from "./ContainerScalarQuery";
import { EventsScalarQuery } from "./EventsScalarQuery";
import { MetricsScalarQuery } from "./MetricsScalarQuery";
import { ProcessScalarQuery } from "./ProcessScalarQuery";
import { SloQuery } from "./SloQuery";

/**
 * An individual scalar query to one of the basic Datadog data sources.
 */
export type ScalarQuery =
  | MetricsScalarQuery
  | EventsScalarQuery
  | ApmResourceStatsQuery
  | ApmMetricsQuery
  | ApmDependencyStatsQuery
  | SloQuery
  | ProcessScalarQuery
  | ContainerScalarQuery
  | UnparsedObject;

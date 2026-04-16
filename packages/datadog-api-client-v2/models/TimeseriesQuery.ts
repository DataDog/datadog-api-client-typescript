/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmDependencyStatsQuery } from "./ApmDependencyStatsQuery";
import { ApmMetricsQuery } from "./ApmMetricsQuery";
import { ApmResourceStatsQuery } from "./ApmResourceStatsQuery";
import { ContainerTimeseriesQuery } from "./ContainerTimeseriesQuery";
import { EventsTimeseriesQuery } from "./EventsTimeseriesQuery";
import { MetricsTimeseriesQuery } from "./MetricsTimeseriesQuery";
import { ProcessTimeseriesQuery } from "./ProcessTimeseriesQuery";
import { SloQuery } from "./SloQuery";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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

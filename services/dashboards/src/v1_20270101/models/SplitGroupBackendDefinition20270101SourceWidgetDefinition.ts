import { UnparsedObject } from "@datadog/datadog-api-client";

import { BarChartBackendDefinition } from "./BarChartBackendDefinition";
import { ChangeBackendDefinition } from "./ChangeBackendDefinition";
import { DistributionBackendDefinition } from "./DistributionBackendDefinition";
import { GeomapBackendDefinition } from "./GeomapBackendDefinition";
import { HeatgridDefinition } from "./HeatgridDefinition";
import { QueryTableBackendDefinition } from "./QueryTableBackendDefinition";
import { QueryValueBackendDefinition } from "./QueryValueBackendDefinition";
import { ScatterplotBackendDefinition } from "./ScatterplotBackendDefinition";
import { SunburstBackendDefinition } from "./SunburstBackendDefinition";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { ToplistBackendDefinition } from "./ToplistBackendDefinition";
import { TreemapBackendDefinition } from "./TreemapBackendDefinition";
import { WildcardBackendDefinition } from "./WildcardBackendDefinition";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SplitGroupBackendDefinition20270101SourceWidgetDefinition =
  | BarChartBackendDefinition
  | ChangeBackendDefinition
  | DistributionBackendDefinition
  | GeomapBackendDefinition
  | HeatgridDefinition
  | QueryTableBackendDefinition
  | QueryValueBackendDefinition
  | ScatterplotBackendDefinition
  | SunburstBackendDefinition
  | TimeseriesWidgetDefinition
  | ToplistBackendDefinition
  | TreemapBackendDefinition
  | WildcardBackendDefinition
  | UnparsedObject;

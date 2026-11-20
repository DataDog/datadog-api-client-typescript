import { UnparsedObject } from "@datadog/datadog-api-client";

import { AlertGraphBackendWidget } from "./AlertGraphBackendWidget";
import { AlertValueBackendWidget } from "./AlertValueBackendWidget";
import { BarChartBackendWidget } from "./BarChartBackendWidget";
import { ChangeBackendWidget } from "./ChangeBackendWidget";
import { CheckStatusBackendWidget } from "./CheckStatusBackendWidget";
import { CohortBackendWidget } from "./CohortBackendWidget";
import { DistributionBackendWidget } from "./DistributionBackendWidget";
import { EmbeddedAppBackendWidget } from "./EmbeddedAppBackendWidget";
import { EventStream } from "./EventStream";
import { EventTimelineBackendWidget } from "./EventTimelineBackendWidget";
import { FreeTextBackendWidget } from "./FreeTextBackendWidget";
import { FunnelBackendWidget } from "./FunnelBackendWidget";
import { GeomapBackendWidget } from "./GeomapBackendWidget";
import { GroupBackendWidget } from "./GroupBackendWidget";
import { HeatgridBackendWidget } from "./HeatgridBackendWidget";
import { HeatmapBackendWidget } from "./HeatmapBackendWidget";
import { HostmapBackendWidget } from "./HostmapBackendWidget";
import { IframeBackendWidget } from "./IframeBackendWidget";
import { ImageBackendWidget } from "./ImageBackendWidget";
import { JourneyMapBackendWidget } from "./JourneyMapBackendWidget";
import { ListStreamBackendWidget } from "./ListStreamBackendWidget";
import { LogStream } from "./LogStream";
import { ManageStatusBackendWidget } from "./ManageStatusBackendWidget";
import { NoteBackendWidget } from "./NoteBackendWidget";
import { PointPlotBackendWidget } from "./PointPlotBackendWidget";
import { PowerpackBackendWidget } from "./PowerpackBackendWidget";
import { QueryTableBackendWidget } from "./QueryTableBackendWidget";
import { QueryValueBackendWidget } from "./QueryValueBackendWidget";
import { RetentionCurveBackendWidget } from "./RetentionCurveBackendWidget";
import { RunWorkflowBackendWidget } from "./RunWorkflowBackendWidget";
import { SankeyBackendWidget } from "./SankeyBackendWidget";
import { ScatterplotBackendWidget } from "./ScatterplotBackendWidget";
import { ServiceMapBackendWidget } from "./ServiceMapBackendWidget";
import { ServiceSummaryBackendWidget } from "./ServiceSummaryBackendWidget";
import { SloBackendWidget } from "./SloBackendWidget";
import { SloListBackendWidget } from "./SloListBackendWidget";
import { SplitGroupBackendWidget } from "./SplitGroupBackendWidget";
import { SunburstBackendWidget } from "./SunburstBackendWidget";
import { TimeseriesBackendWidget } from "./TimeseriesBackendWidget";
import { ToplistBackendWidget } from "./ToplistBackendWidget";
import { TopologyMapBackendWidget } from "./TopologyMapBackendWidget";
import { TreemapBackendWidget } from "./TreemapBackendWidget";
import { WildcardBackendWidget } from "./WildcardBackendWidget";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DashboardBackendWidget =
  | AlertGraphBackendWidget
  | AlertValueBackendWidget
  | BarChartBackendWidget
  | ChangeBackendWidget
  | CheckStatusBackendWidget
  | CohortBackendWidget
  | DistributionBackendWidget
  | EmbeddedAppBackendWidget
  | EventStream
  | EventTimelineBackendWidget
  | FreeTextBackendWidget
  | FunnelBackendWidget
  | GeomapBackendWidget
  | GroupBackendWidget
  | HeatgridBackendWidget
  | HeatmapBackendWidget
  | HostmapBackendWidget
  | IframeBackendWidget
  | ImageBackendWidget
  | JourneyMapBackendWidget
  | ListStreamBackendWidget
  | LogStream
  | ManageStatusBackendWidget
  | NoteBackendWidget
  | PointPlotBackendWidget
  | PowerpackBackendWidget
  | QueryTableBackendWidget
  | QueryValueBackendWidget
  | RetentionCurveBackendWidget
  | RunWorkflowBackendWidget
  | SankeyBackendWidget
  | ScatterplotBackendWidget
  | ServiceMapBackendWidget
  | SloBackendWidget
  | SloListBackendWidget
  | SplitGroupBackendWidget
  | SunburstBackendWidget
  | TimeseriesBackendWidget
  | ToplistBackendWidget
  | TopologyMapBackendWidget
  | ServiceSummaryBackendWidget
  | TreemapBackendWidget
  | WildcardBackendWidget
  | UnparsedObject;

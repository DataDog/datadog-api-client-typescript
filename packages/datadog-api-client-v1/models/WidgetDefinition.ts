/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AlertGraphWidgetDefinition } from "./AlertGraphWidgetDefinition";
import { AlertValueWidgetDefinition } from "./AlertValueWidgetDefinition";
import { BarChartWidgetDefinition } from "./BarChartWidgetDefinition";
import { ChangeWidgetDefinition } from "./ChangeWidgetDefinition";
import { CheckStatusWidgetDefinition } from "./CheckStatusWidgetDefinition";
import { CloudcraftWidgetDefinition } from "./CloudcraftWidgetDefinition";
import { CohortWidgetDefinition } from "./CohortWidgetDefinition";
import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { EventStreamWidgetDefinition } from "./EventStreamWidgetDefinition";
import { EventTimelineWidgetDefinition } from "./EventTimelineWidgetDefinition";
import { FreeTextWidgetDefinition } from "./FreeTextWidgetDefinition";
import { FunnelWidgetDefinition } from "./FunnelWidgetDefinition";
import { GeomapWidgetDefinition } from "./GeomapWidgetDefinition";
import { GroupWidgetDefinition } from "./GroupWidgetDefinition";
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { HostMapWidgetDefinition } from "./HostMapWidgetDefinition";
import { IFrameWidgetDefinition } from "./IFrameWidgetDefinition";
import { ImageWidgetDefinition } from "./ImageWidgetDefinition";
import { ListStreamWidgetDefinition } from "./ListStreamWidgetDefinition";
import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { MonitorSummaryWidgetDefinition } from "./MonitorSummaryWidgetDefinition";
import { NoteWidgetDefinition } from "./NoteWidgetDefinition";
import { PowerpackWidgetDefinition } from "./PowerpackWidgetDefinition";
import { ProductAnalyticsFunnelWidgetDefinition } from "./ProductAnalyticsFunnelWidgetDefinition";
import { QueryValueWidgetDefinition } from "./QueryValueWidgetDefinition";
import { RetentionCurveWidgetDefinition } from "./RetentionCurveWidgetDefinition";
import { RunWorkflowWidgetDefinition } from "./RunWorkflowWidgetDefinition";
import { SankeyWidgetDefinition } from "./SankeyWidgetDefinition";
import { ScatterPlotWidgetDefinition } from "./ScatterPlotWidgetDefinition";
import { ServiceMapWidgetDefinition } from "./ServiceMapWidgetDefinition";
import { ServiceSummaryWidgetDefinition } from "./ServiceSummaryWidgetDefinition";
import { SLOListWidgetDefinition } from "./SLOListWidgetDefinition";
import { SLOWidgetDefinition } from "./SLOWidgetDefinition";
import { SplitGraphWidgetDefinition } from "./SplitGraphWidgetDefinition";
import { SunburstWidgetDefinition } from "./SunburstWidgetDefinition";
import { TableWidgetDefinition } from "./TableWidgetDefinition";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";
import { TopologyMapWidgetDefinition } from "./TopologyMapWidgetDefinition";
import { TreeMapWidgetDefinition } from "./TreeMapWidgetDefinition";
import { WildcardWidgetDefinition } from "./WildcardWidgetDefinition";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * [Definition of the widget](https://docs.datadoghq.com/dashboards/widgets/).
 */

export type WidgetDefinition =
  | AlertGraphWidgetDefinition
  | AlertValueWidgetDefinition
  | BarChartWidgetDefinition
  | ChangeWidgetDefinition
  | CheckStatusWidgetDefinition
  | CloudcraftWidgetDefinition
  | CohortWidgetDefinition
  | DistributionWidgetDefinition
  | EventStreamWidgetDefinition
  | EventTimelineWidgetDefinition
  | FreeTextWidgetDefinition
  | FunnelWidgetDefinition
  | ProductAnalyticsFunnelWidgetDefinition
  | GeomapWidgetDefinition
  | GroupWidgetDefinition
  | HeatMapWidgetDefinition
  | HostMapWidgetDefinition
  | IFrameWidgetDefinition
  | ImageWidgetDefinition
  | ListStreamWidgetDefinition
  | LogStreamWidgetDefinition
  | MonitorSummaryWidgetDefinition
  | NoteWidgetDefinition
  | PowerpackWidgetDefinition
  | QueryValueWidgetDefinition
  | RetentionCurveWidgetDefinition
  | RunWorkflowWidgetDefinition
  | SLOListWidgetDefinition
  | SLOWidgetDefinition
  | ScatterPlotWidgetDefinition
  | SankeyWidgetDefinition
  | ServiceMapWidgetDefinition
  | ServiceSummaryWidgetDefinition
  | SplitGraphWidgetDefinition
  | SunburstWidgetDefinition
  | TableWidgetDefinition
  | TimeseriesWidgetDefinition
  | ToplistWidgetDefinition
  | TopologyMapWidgetDefinition
  | TreeMapWidgetDefinition
  | WildcardWidgetDefinition
  | UnparsedObject;

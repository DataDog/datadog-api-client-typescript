/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
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

import { UnparsedObject } from "../../datadog-api-client-common/util";

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

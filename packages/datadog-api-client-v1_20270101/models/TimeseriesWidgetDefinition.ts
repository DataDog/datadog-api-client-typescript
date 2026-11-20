/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnomalyDetectionConfig } from "./AnomalyDetectionConfig";
import { BackendTimeseriesAxisDefinition } from "./BackendTimeseriesAxisDefinition";
import { LegacyEventOverlayQuery } from "./LegacyEventOverlayQuery";
import { TimeseriesWidgetDefinitionType } from "./TimeseriesWidgetDefinitionType";
import { TimeseriesWidgetLegendColumn } from "./TimeseriesWidgetLegendColumn";
import { TimeseriesWidgetLegendLayout } from "./TimeseriesWidgetLegendLayout";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { TimeseriesXAxis } from "./TimeseriesXAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesWidgetDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "anomalyDetection"?: AnomalyDetectionConfig;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "events"?: Array<LegacyEventOverlayQuery>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legendColumns"?: Array<TimeseriesWidgetLegendColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legendLayout"?: TimeseriesWidgetLegendLayout;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legendSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<TimeseriesWidgetRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rightYaxis"?: BackendTimeseriesAxisDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showLegend"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TimeseriesWidgetDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "xaxis"?: TimeseriesXAxis;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yaxis"?: BackendTimeseriesAxisDefinition;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    anomalyDetection: {
      baseName: "anomaly_detection",
      type: "AnomalyDetectionConfig",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    events: {
      baseName: "events",
      type: "Array<LegacyEventOverlayQuery>",
    },
    legendColumns: {
      baseName: "legend_columns",
      type: "Array<TimeseriesWidgetLegendColumn>",
    },
    legendLayout: {
      baseName: "legend_layout",
      type: "TimeseriesWidgetLegendLayout",
    },
    legendSize: {
      baseName: "legend_size",
      type: "string",
    },
    markers: {
      baseName: "markers",
      type: "Array<WidgetMarker>",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "Array<TimeseriesWidgetRequest>",
      required: true,
    },
    rightYaxis: {
      baseName: "right_yaxis",
      type: "BackendTimeseriesAxisDefinition",
    },
    showLegend: {
      baseName: "show_legend",
      type: "boolean",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TimeseriesWidgetDefinitionType",
      required: true,
    },
    xaxis: {
      baseName: "xaxis",
      type: "TimeseriesXAxis",
    },
    yaxis: {
      baseName: "yaxis",
      type: "BackendTimeseriesAxisDefinition",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

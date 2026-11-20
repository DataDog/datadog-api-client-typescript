/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatmapBackendDefinitionLegendLayout } from "./HeatmapBackendDefinitionLegendLayout";
import { HeatmapBackendDefinitionType } from "./HeatmapBackendDefinitionType";
import { HeatmapBackendDefinitionYaxis } from "./HeatmapBackendDefinitionYaxis";
import { HeatmapBackendRequest } from "./HeatmapBackendRequest";
import { HeatmapXAxis } from "./HeatmapXAxis";
import { LegacyEventOverlayQuery } from "./LegacyEventOverlayQuery";
import { TimeseriesWidgetLegendColumn } from "./TimeseriesWidgetLegendColumn";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendDefinition {
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
  "legendLayout"?: HeatmapBackendDefinitionLegendLayout;
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
  "requests": Array<HeatmapBackendRequest>;
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
  "type": HeatmapBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "xaxis"?: HeatmapXAxis;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yaxis"?: HeatmapBackendDefinitionYaxis;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
      type: "HeatmapBackendDefinitionLegendLayout",
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
      type: "Array<HeatmapBackendRequest>",
      required: true,
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
      type: "HeatmapBackendDefinitionType",
      required: true,
    },
    xaxis: {
      baseName: "xaxis",
      type: "HeatmapXAxis",
    },
    yaxis: {
      baseName: "yaxis",
      type: "HeatmapBackendDefinitionYaxis",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatmapBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}

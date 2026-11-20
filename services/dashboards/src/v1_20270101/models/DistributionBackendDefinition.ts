import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BackendDistributionYAxis } from "./BackendDistributionYAxis";
import { DistributionBackendDefinitionLegendLayout } from "./DistributionBackendDefinitionLegendLayout";
import { DistributionBackendDefinitionType } from "./DistributionBackendDefinitionType";
import { DistributionBackendRequest } from "./DistributionBackendRequest";
import { DistributionXAxis } from "./DistributionXAxis";
import { TimeseriesWidgetLegendColumn } from "./TimeseriesWidgetLegendColumn";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionBackendDefinition {
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
  "legendColumns"?: Array<TimeseriesWidgetLegendColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legendLayout"?: DistributionBackendDefinitionLegendLayout;
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
  "requests": Array<DistributionBackendRequest>;
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
  "type": DistributionBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "xaxis"?: DistributionXAxis;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yaxis"?: BackendDistributionYAxis;
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
    legendColumns: {
      baseName: "legend_columns",
      type: "Array<TimeseriesWidgetLegendColumn>",
    },
    legendLayout: {
      baseName: "legend_layout",
      type: "DistributionBackendDefinitionLegendLayout",
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
      type: "Array<DistributionBackendRequest>",
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
      type: "DistributionBackendDefinitionType",
      required: true,
    },
    xaxis: {
      baseName: "xaxis",
      type: "DistributionXAxis",
    },
    yaxis: {
      baseName: "yaxis",
      type: "BackendDistributionYAxis",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}

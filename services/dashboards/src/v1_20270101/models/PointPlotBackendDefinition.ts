import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Axis } from "./Axis";
import { Marker } from "./Marker";
import { PointPlotBackendDefinitionType } from "./PointPlotBackendDefinitionType";
import { PointPlotDataProjectionRequest } from "./PointPlotDataProjectionRequest";
import { ScatterPlotLegendType } from "./ScatterPlotLegendType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PointPlotBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "legend"?: ScatterPlotLegendType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "markers"?: Array<Marker>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": Array<PointPlotDataProjectionRequest>;
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
  "type": PointPlotBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yaxis"?: Axis;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    legend: {
      baseName: "legend",
      type: "ScatterPlotLegendType",
    },
    markers: {
      baseName: "markers",
      type: "Array<Marker>",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "Array<PointPlotDataProjectionRequest>",
      required: true,
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
      type: "PointPlotBackendDefinitionType",
      required: true,
    },
    yaxis: {
      baseName: "yaxis",
      type: "Axis",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PointPlotBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}

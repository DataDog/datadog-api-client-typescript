/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotBackendDefinitionType } from "./ScatterplotBackendDefinitionType";
import { ScatterPlotLegendType } from "./ScatterPlotLegendType";
import { ScatterplotRequests } from "./ScatterplotRequests";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "colorByGroups"?: Array<string>;
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
  "legend"?: ScatterPlotLegendType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requests": ScatterplotRequests;
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
  "type": ScatterplotBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "xaxis"?: WidgetAxis;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yaxis"?: WidgetAxis;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorByGroups: {
      baseName: "color_by_groups",
      type: "Array<string>",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    legend: {
      baseName: "legend",
      type: "ScatterPlotLegendType",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "ScatterplotRequests",
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
      type: "ScatterplotBackendDefinitionType",
      required: true,
    },
    xaxis: {
      baseName: "xaxis",
      type: "WidgetAxis",
    },
    yaxis: {
      baseName: "yaxis",
      type: "WidgetAxis",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}

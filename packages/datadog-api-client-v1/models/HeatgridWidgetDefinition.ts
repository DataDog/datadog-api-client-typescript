/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridColorConfig } from "./HeatgridColorConfig";
import { HeatgridLabelColumn } from "./HeatgridLabelColumn";
import { HeatgridLegend } from "./HeatgridLegend";
import { HeatgridSort } from "./HeatgridSort";
import { HeatgridWidgetDefinitionType } from "./HeatgridWidgetDefinitionType";
import { HeatgridWidgetRequest } from "./HeatgridWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The heatgrid visualization displays values for each group over time using color.
 */
export class HeatgridWidgetDefinition {
  /**
   * Color configuration for continuous gradients or discrete thresholds.
   */
  "color"?: HeatgridColorConfig;
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Description of the widget.
   */
  "description"?: string;
  /**
   * Configuration of the group label column.
   */
  "labelColumn"?: HeatgridLabelColumn;
  /**
   * Legend configuration for the heatgrid widget.
   */
  "legend"?: HeatgridLegend;
  /**
   * Widget requests. The widget displays one formula, which can combine multiple queries.
   */
  "requests": Array<HeatgridWidgetRequest>;
  /**
   * Ordering of the heatgrid rows.
   */
  "sort": HeatgridSort;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the heatgrid widget.
   */
  "type": HeatgridWidgetDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    color: {
      baseName: "color",
      type: "HeatgridColorConfig",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    labelColumn: {
      baseName: "label_column",
      type: "HeatgridLabelColumn",
    },
    legend: {
      baseName: "legend",
      type: "HeatgridLegend",
    },
    requests: {
      baseName: "requests",
      type: "Array<HeatgridWidgetRequest>",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "HeatgridSort",
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
      type: "HeatgridWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

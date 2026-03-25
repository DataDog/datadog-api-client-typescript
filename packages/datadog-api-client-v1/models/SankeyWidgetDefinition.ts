/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SankeyWidgetDefinitionType } from "./SankeyWidgetDefinitionType";
import { SankeyWidgetRequest } from "./SankeyWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Sankey diagram visualizes the flow of data between categories, stages or sets of values.
 */
export class SankeyWidgetDefinition {
  /**
   * List of Sankey widget requests.
   */
  "requests": Array<SankeyWidgetRequest>;
  /**
   * Whether to show links for "other" category.
   */
  "showOtherLinks"?: boolean;
  /**
   * Whether to sort nodes in the Sankey diagram.
   */
  "sortNodes"?: boolean;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
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
   * Type of the Sankey widget.
   */
  "type": SankeyWidgetDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    requests: {
      baseName: "requests",
      type: "Array<SankeyWidgetRequest>",
      required: true,
    },
    showOtherLinks: {
      baseName: "show_other_links",
      type: "boolean",
    },
    sortNodes: {
      baseName: "sort_nodes",
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
      type: "SankeyWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

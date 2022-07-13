/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TreeMapColorBy } from "./TreeMapColorBy";
import { TreeMapGroupBy } from "./TreeMapGroupBy";
import { TreeMapSizeBy } from "./TreeMapSizeBy";
import { TreeMapWidgetDefinitionType } from "./TreeMapWidgetDefinitionType";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The treemap visualization found on the Host Dashboards comes from the output of `ps auxww`. This is not continuously run on your hosts. Instead, it’s run once on Agent start/restart. The treemap is only supported for process data on a single host dashboard — this may not be reused in other dashboards or for other metrics.
 */
export class TreeMapWidgetDefinition {
  /**
   * The attribute used to determine color in the widget.
   */
  "colorBy"?: TreeMapColorBy;
  /**
   * The attribute used to group elements in the widget.
   */
  "groupBy"?: TreeMapGroupBy;
  /**
   * List of top list widget requests.
   */
  "requests": [TreeMapWidgetRequest];
  /**
   * The attribute used to determine size in the widget.
   */
  "sizeBy"?: TreeMapSizeBy;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * Type of the treemap widget.
   */
  "type": TreeMapWidgetDefinitionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorBy: {
      baseName: "color_by",
      type: "TreeMapColorBy",
    },
    groupBy: {
      baseName: "group_by",
      type: "TreeMapGroupBy",
    },
    requests: {
      baseName: "requests",
      type: "[TreeMapWidgetRequest]",
      required: true,
    },
    sizeBy: {
      baseName: "size_by",
      type: "TreeMapSizeBy",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TreeMapWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TreeMapColorBy } from "./TreeMapColorBy";
import { TreeMapGroupBy } from "./TreeMapGroupBy";
import { TreeMapSizeBy } from "./TreeMapSizeBy";
import { TreeMapWidgetDefinitionType } from "./TreeMapWidgetDefinitionType";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The treemap visualization found on the Host Dashboards comes from the output of `ps auxww`. This is not continuously run on your hosts. Instead, it’s run once on Agent start/restart. The treemap is only supported for process data on a single host dashboard — this may not be reused in other dashboards or for other metrics.
 */

export class TreeMapWidgetDefinition {
  "colorBy": TreeMapColorBy;
  "groupBy": TreeMapGroupBy;
  /**
   * List of top list widget requests.
   */
  "requests": Array<TreeMapWidgetRequest>;
  "sizeBy": TreeMapSizeBy;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "type": TreeMapWidgetDefinitionType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    colorBy: {
      baseName: "color_by",
      type: "TreeMapColorBy",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "TreeMapGroupBy",
      required: true,
    },
    requests: {
      baseName: "requests",
      type: "Array<TreeMapWidgetRequest>",
      required: true,
    },
    sizeBy: {
      baseName: "size_by",
      type: "TreeMapSizeBy",
      required: true,
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

  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

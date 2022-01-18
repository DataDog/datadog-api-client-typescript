/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TableWidgetDefinitionType } from "./TableWidgetDefinitionType";
import { TableWidgetHasSearchBar } from "./TableWidgetHasSearchBar";
import { TableWidgetRequest } from "./TableWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The table visualization is available on timeboards and screenboards. It displays columns of metrics grouped by tag key.
 */

export class TableWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  "hasSearchBar"?: TableWidgetHasSearchBar;
  /**
   * Widget definition.
   */
  "requests": Array<TableWidgetRequest>;
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": TableWidgetDefinitionType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    hasSearchBar: {
      baseName: "has_search_bar",
      type: "TableWidgetHasSearchBar",
    },
    requests: {
      baseName: "requests",
      type: "Array<TableWidgetRequest>",
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
      type: "TableWidgetDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return TableWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

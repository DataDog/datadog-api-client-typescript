/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HostMapWidgetDefinitionRequests } from "./HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "./HostMapWidgetDefinitionStyle";
import { HostMapWidgetDefinitionType } from "./HostMapWidgetDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetNodeType } from "./WidgetNodeType";
import { WidgetTextAlign } from "./WidgetTextAlign";

export class HostMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of tag prefixes to group by.
   */
  "group"?: Array<string>;
  /**
   * Whether to show the hosts that don’t fit in a group.
   */
  "noGroupHosts"?: boolean;
  /**
   * Whether to show the hosts with no metrics.
   */
  "noMetricHosts"?: boolean;
  "nodeType"?: WidgetNodeType;
  /**
   * Notes on the title.
   */
  "notes"?: string;
  "requests": HostMapWidgetDefinitionRequests;
  /**
   * List of tags used to filter the map.
   */
  "scope"?: Array<string>;
  "style"?: HostMapWidgetDefinitionStyle;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": HostMapWidgetDefinitionType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    group: {
      baseName: "group",
      type: "Array<string>",
    },
    noGroupHosts: {
      baseName: "no_group_hosts",
      type: "boolean",
    },
    noMetricHosts: {
      baseName: "no_metric_hosts",
      type: "boolean",
    },
    nodeType: {
      baseName: "node_type",
      type: "WidgetNodeType",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "HostMapWidgetDefinitionRequests",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
    },
    style: {
      baseName: "style",
      type: "HostMapWidgetDefinitionStyle",
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
      type: "HostMapWidgetDefinitionType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return HostMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

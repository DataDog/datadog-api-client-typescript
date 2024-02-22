/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostMapWidgetDefinitionRequests } from "./HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "./HostMapWidgetDefinitionStyle";
import { HostMapWidgetDefinitionType } from "./HostMapWidgetDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetNodeType } from "./WidgetNodeType";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The host map widget graphs any metric across your hosts using the same visualization available from the main Host Map page.
 */
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
  /**
   * Which type of node to use in the map.
   */
  "nodeType"?: WidgetNodeType;
  /**
   * Notes on the title.
   */
  "notes"?: string;
  /**
   * List of definitions.
   */
  "requests": HostMapWidgetDefinitionRequests;
  /**
   * List of tags used to filter the map.
   */
  "scope"?: Array<string>;
  /**
   * The style to apply to the widget.
   */
  "style"?: HostMapWidgetDefinitionStyle;
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
   * Type of the host map widget.
   */
  "type": HostMapWidgetDefinitionType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

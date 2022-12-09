/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CheckStatusWidgetDefinitionType } from "./CheckStatusWidgetDefinitionType";
import { WidgetGrouping } from "./WidgetGrouping";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Check status shows the current status or number of results for any check performed.
 */
export class CheckStatusWidgetDefinition {
  /**
   * Name of the check to use in the widget.
   */
  "check": string;
  /**
   * Group reporting a single check.
   */
  "group"?: string;
  /**
   * List of tag prefixes to group by in the case of a cluster check.
   */
  "groupBy"?: Array<string>;
  /**
   * The kind of grouping to use.
   */
  "grouping": WidgetGrouping;
  /**
   * List of tags used to filter the groups reporting a cluster check.
   */
  "tags"?: Array<string>;
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
   * Type of the check status widget.
   */
  "type": CheckStatusWidgetDefinitionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    check: {
      baseName: "check",
      type: "string",
      required: true,
    },
    group: {
      baseName: "group",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    grouping: {
      baseName: "grouping",
      type: "WidgetGrouping",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
      type: "CheckStatusWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CheckStatusWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

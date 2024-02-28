/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GroupWidgetDefinitionType } from "./GroupWidgetDefinitionType";
import { Widget } from "./Widget";
import { WidgetLayoutType } from "./WidgetLayoutType";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The groups widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
 */
export class GroupWidgetDefinition {
  /**
   * Background color of the group title.
   */
  "backgroundColor"?: string;
  /**
   * URL of image to display as a banner for the group.
   */
  "bannerImg"?: string;
  /**
   * Layout type of the group.
   */
  "layoutType": WidgetLayoutType;
  /**
   * Whether to show the title or not.
   */
  "showTitle"?: boolean;
  /**
   * Title of the widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Type of the group widget.
   */
  "type": GroupWidgetDefinitionType;
  /**
   * List of widget groups.
   */
  "widgets": Array<Widget>;

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
    backgroundColor: {
      baseName: "background_color",
      type: "string",
    },
    bannerImg: {
      baseName: "banner_img",
      type: "string",
    },
    layoutType: {
      baseName: "layout_type",
      type: "WidgetLayoutType",
      required: true,
    },
    showTitle: {
      baseName: "show_title",
      type: "boolean",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    type: {
      baseName: "type",
      type: "GroupWidgetDefinitionType",
      required: true,
    },
    widgets: {
      baseName: "widgets",
      type: "Array<Widget>",
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
    return GroupWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PowerpackInnerWidgets } from "./PowerpackInnerWidgets";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack group widget object.
 */
export class PowerpackGroupWidgetDefinition {
  /**
   * Layout type of widgets.
   */
  "layoutType": string;
  /**
   * Boolean indicating whether powerpack group title should be visible or not.
   */
  "showTitle"?: boolean;
  /**
   * Name for the group widget.
   */
  "title"?: string;
  /**
   * Type of widget, must be group.
   */
  "type": string;
  /**
   * Widgets inside the powerpack.
   */
  "widgets": Array<PowerpackInnerWidgets>;

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
    layoutType: {
      baseName: "layout_type",
      type: "string",
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
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    widgets: {
      baseName: "widgets",
      type: "Array<PowerpackInnerWidgets>",
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
    return PowerpackGroupWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}

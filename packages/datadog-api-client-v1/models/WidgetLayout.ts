/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The layout for a widget on a `free` or **new dashboard layout** dashboard.
 */
export class WidgetLayout {
  /**
   * The height of the widget. Should be a non-negative integer.
   */
  "height": number;
  /**
   * Whether the widget should be the first one on the second column in high density or not.
   * **Note**: Only for the **new dashboard layout** and only one widget in the dashboard should have this property set to `true`.
   */
  "isColumnBreak"?: boolean;
  /**
   * The width of the widget. Should be a non-negative integer.
   */
  "width": number;
  /**
   * The position of the widget on the x (horizontal) axis. Should be a non-negative integer.
   */
  "x": number;
  /**
   * The position of the widget on the y (vertical) axis. Should be a non-negative integer.
   */
  "y": number;

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
    height: {
      baseName: "height",
      type: "number",
      required: true,
      format: "int64",
    },
    isColumnBreak: {
      baseName: "is_column_break",
      type: "boolean",
    },
    width: {
      baseName: "width",
      type: "number",
      required: true,
      format: "int64",
    },
    x: {
      baseName: "x",
      type: "number",
      required: true,
      format: "int64",
    },
    y: {
      baseName: "y",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetLayout.attributeTypeMap;
  }

  public constructor() {}
}

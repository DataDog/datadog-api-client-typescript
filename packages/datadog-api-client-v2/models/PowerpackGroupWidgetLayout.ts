/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Powerpack group widget layout.
 */
export class PowerpackGroupWidgetLayout {
  /**
   * The height of the widget. Should be a non-negative integer.
   */
  "height": Int64;
  /**
   * The width of the widget. Should be a non-negative integer.
   */
  "width": Int64;
  /**
   * The position of the widget on the x (horizontal) axis. Should be a non-negative integer.
   */
  "x": Int64;
  /**
   * The position of the widget on the y (vertical) axis. Should be a non-negative integer.
   */
  "y": Int64;

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
    return PowerpackGroupWidgetLayout.attributeTypeMap;
  }

  public constructor() {}
}

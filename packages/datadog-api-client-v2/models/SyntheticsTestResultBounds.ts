/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Bounding box of an element on the page.
 */
export class SyntheticsTestResultBounds {
  /**
   * Height in pixels.
   */
  "height"?: Int64;
  /**
   * Width in pixels.
   */
  "width"?: Int64;
  /**
   * Horizontal position in pixels.
   */
  "x"?: Int64;
  /**
   * Vertical position in pixels.
   */
  "y"?: Int64;

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
      format: "int64",
    },
    width: {
      baseName: "width",
      type: "number",
      format: "int64",
    },
    x: {
      baseName: "x",
      type: "number",
      format: "int64",
    },
    y: {
      baseName: "y",
      type: "number",
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
    return SyntheticsTestResultBounds.attributeTypeMap;
  }

  public constructor() {}
}

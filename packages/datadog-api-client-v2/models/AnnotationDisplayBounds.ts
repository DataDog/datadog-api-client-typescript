/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `AnnotationDisplayBounds` object.
 */
export class AnnotationDisplayBounds {
  /**
   * The `bounds` `height`.
   */
  "height"?: number;
  /**
   * The `bounds` `width`.
   */
  "width"?: number;
  /**
   * The `bounds` `x`.
   */
  "x"?: number;
  /**
   * The `bounds` `y`.
   */
  "y"?: number;

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
      format: "double",
    },
    width: {
      baseName: "width",
      type: "number",
      format: "double",
    },
    x: {
      baseName: "x",
      type: "number",
      format: "double",
    },
    y: {
      baseName: "y",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnnotationDisplayBounds.attributeTypeMap;
  }

  public constructor() {}
}

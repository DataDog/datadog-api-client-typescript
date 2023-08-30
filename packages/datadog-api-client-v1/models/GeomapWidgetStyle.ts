/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The style for the points coming from this request.
 */
export class GeomapWidgetStyle {
  /**
   * Field used for coloring the points based on a value.
   */
  "colorBy"?: string;
  /**
   * Defines the color of all the points for this request.
   */
  "palette"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    colorBy: {
      baseName: "color_by",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapWidgetStyle.attributeTypeMap;
  }

  public constructor() {}
}

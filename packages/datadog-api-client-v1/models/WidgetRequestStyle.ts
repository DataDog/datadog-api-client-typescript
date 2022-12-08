/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetLineType } from "./WidgetLineType";
import { WidgetLineWidth } from "./WidgetLineWidth";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Define request widget style.
 */
export class WidgetRequestStyle {
  /**
   * Type of lines displayed.
   */
  "lineType"?: WidgetLineType | UnparsedObject;
  /**
   * Width of line displayed.
   */
  "lineWidth"?: WidgetLineWidth | UnparsedObject;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    lineType: {
      baseName: "line_type",
      type: "WidgetLineType",
    },
    lineWidth: {
      baseName: "line_width",
      type: "WidgetLineWidth",
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
    return WidgetRequestStyle.attributeTypeMap;
  }

  public constructor() {}
}

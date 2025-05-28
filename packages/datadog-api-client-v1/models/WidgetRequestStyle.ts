/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetLineType } from "./WidgetLineType";
import { WidgetLineWidth } from "./WidgetLineWidth";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Define request widget style.
*/
export class WidgetRequestStyle {
  /**
   * Type of lines displayed.
  */
  "lineType"?: WidgetLineType;
  /**
   * Width of line displayed.
  */
  "lineWidth"?: WidgetLineWidth;
  /**
   * Color palette to apply to the widget.
  */
  "palette"?: string;

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
    "lineType": {
      "baseName": "line_type",
      "type": "WidgetLineType",
    },
    "lineWidth": {
      "baseName": "line_width",
      "type": "WidgetLineWidth",
    },
    "palette": {
      "baseName": "palette",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return WidgetRequestStyle.attributeTypeMap;

  }

  public constructor() {











  }
}










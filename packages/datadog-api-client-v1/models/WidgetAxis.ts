/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Axis controls for the widget.
*/
export class WidgetAxis {
  /**
   * Set to `true` to include zero.
  */
  "includeZero"?: boolean;
  /**
   * The label of the axis to display on the graph. Only usable on Scatterplot Widgets.
  */
  "label"?: string;
  /**
   * Specifies maximum numeric value to show on the axis. Defaults to `auto`.
  */
  "max"?: string;
  /**
   * Specifies minimum numeric value to show on the axis. Defaults to `auto`.
  */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear`, `log`, `sqrt`, and `pow##` (for example `pow2` or `pow0.5`).
  */
  "scale"?: string;

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
    "includeZero": {
      "baseName": "include_zero",
      "type": "boolean",
    },
    "label": {
      "baseName": "label",
      "type": "string",
    },
    "max": {
      "baseName": "max",
      "type": "string",
    },
    "min": {
      "baseName": "min",
      "type": "string",
    },
    "scale": {
      "baseName": "scale",
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




    return WidgetAxis.attributeTypeMap;

  }

  public constructor() {











  }
}










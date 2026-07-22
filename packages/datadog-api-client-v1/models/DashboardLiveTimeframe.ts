/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardLiveTimeframeType } from "./DashboardLiveTimeframeType";
import { WidgetLiveSpanUnit } from "./WidgetLiveSpanUnit";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A live dashboard timeframe.
*/
export class DashboardLiveTimeframe {
  /**
   * Type of live timeframe.
  */
  "type": DashboardLiveTimeframeType;
  /**
   * Unit of the time span.
  */
  "unit": WidgetLiveSpanUnit;
  /**
   * Value of the live timeframe span.
  */
  "value": number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "type": {
      "baseName": "type",
      "type": "DashboardLiveTimeframeType",
      "required": true,
    },
    "unit": {
      "baseName": "unit",
      "type": "WidgetLiveSpanUnit",
      "required": true,
    },
    "value": {
      "baseName": "value",
      "type": "number",
      "required": true,
      "format": "int64",
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




    return DashboardLiveTimeframe.attributeTypeMap;

  }

  public constructor() {











  }
}










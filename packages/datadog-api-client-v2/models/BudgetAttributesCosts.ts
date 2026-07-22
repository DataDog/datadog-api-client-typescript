/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Aggregated cost data for the budget over the requested period.
*/
export class BudgetAttributesCosts {
  /**
   * The total actual cost. Present only when `actual=true` is requested.
  */
  "actual"?: number;
  /**
   * The total budgeted amount over the requested period.
  */
  "amount"?: number;
  /**
   * The total forecast cost, with any custom forecast overrides applied. Present only when `forecast=true` is requested.
  */
  "forecast"?: number;
  /**
   * The out-of-the-box ML forecast before custom overrides. Present only when `forecast=true` is requested.
  */
  "ootbForecast"?: number;

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
    "actual": {
      "baseName": "actual",
      "type": "number",
      "format": "double",
    },
    "amount": {
      "baseName": "amount",
      "type": "number",
      "format": "double",
    },
    "forecast": {
      "baseName": "forecast",
      "type": "number",
      "format": "double",
    },
    "ootbForecast": {
      "baseName": "ootb_forecast",
      "type": "number",
      "format": "double",
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




    return BudgetAttributesCosts.attributeTypeMap;

  }

  public constructor() {











  }
}










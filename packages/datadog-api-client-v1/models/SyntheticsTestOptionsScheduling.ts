/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object containing timeframes and timezone used for advanced scheduling.
*/
export class SyntheticsTestOptionsScheduling {
  /**
   * Array containing objects describing the scheduling pattern to apply to each day.
  */
  "timeframes": Array<SyntheticsTestOptionsSchedulingTimeframe>;
  /**
   * Timezone in which the timeframe is based.
  */
  "timezone": string;

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
    "timeframes": {
      "baseName": "timeframes",
      "type": "Array<SyntheticsTestOptionsSchedulingTimeframe>",
      "required": true,
    },
    "timezone": {
      "baseName": "timezone",
      "type": "string",
      "required": true,
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




    return SyntheticsTestOptionsScheduling.attributeTypeMap;

  }

  public constructor() {











  }
}










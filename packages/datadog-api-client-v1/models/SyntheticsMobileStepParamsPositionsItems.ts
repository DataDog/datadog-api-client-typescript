/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A description of a single position for a `flick` step type.
*/
export class SyntheticsMobileStepParamsPositionsItems {
  /**
   * The `x` position for the flick.
  */
  "x"?: number;
  /**
   * The `y` position for the flick.
  */
  "y"?: number;

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
    "x": {
      "baseName": "x",
      "type": "number",
      "format": "double",
    },
    "y": {
      "baseName": "y",
      "type": "number",
      "format": "double",
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




    return SyntheticsMobileStepParamsPositionsItems.attributeTypeMap;

  }

  public constructor() {











  }
}










/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NumberFormatUnitScaleType } from "./NumberFormatUnitScaleType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Canonical unit.
*/
export class NumberFormatUnitCanonical {
  /**
   * The name of the unit per item.
  */
  "perUnitName"?: string;
  /**
   * The type of unit scale.
  */
  "type"?: NumberFormatUnitScaleType;
  /**
   * The name of the unit.
  */
  "unitName"?: string;

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
    "perUnitName": {
      "baseName": "per_unit_name",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "NumberFormatUnitScaleType",
    },
    "unitName": {
      "baseName": "unit_name",
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




    return NumberFormatUnitCanonical.attributeTypeMap;

  }

  public constructor() {











  }
}










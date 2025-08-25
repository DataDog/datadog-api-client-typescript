/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Defines how often the rotation repeats, using a combination of days and optional seconds. Should be at least 1 hour.
*/
export class LayerAttributesInterval {
  /**
   * The number of days in each rotation cycle.
  */
  "days"?: number;
  /**
   * Any additional seconds for the rotation cycle (up to 30 days).
  */
  "seconds"?: number;

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
    "days": {
      "baseName": "days",
      "type": "number",
      "format": "int32",
    },
    "seconds": {
      "baseName": "seconds",
      "type": "number",
      "format": "int64",
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




    return LayerAttributesInterval.attributeTypeMap;

  }

  public constructor() {











  }
}










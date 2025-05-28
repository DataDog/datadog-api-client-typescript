/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Used to perform a histogram computation (only for measure facets).
 * At most, 100 buckets are allowed, the number of buckets is `(max - min)/interval`.
*/
export class CIAppGroupByHistogram {
  /**
   * The bin size of the histogram buckets.
  */
  "interval": number;
  /**
   * The maximum value for the measure used in the histogram
   * (values greater than this one are filtered out).
  */
  "max": number;
  /**
   * The minimum value for the measure used in the histogram
   * (values smaller than this one are filtered out).
  */
  "min": number;

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
    "interval": {
      "baseName": "interval",
      "type": "number",
      "required": true,
      "format": "double",
    },
    "max": {
      "baseName": "max",
      "type": "number",
      "required": true,
      "format": "double",
    },
    "min": {
      "baseName": "min",
      "type": "number",
      "required": true,
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




    return CIAppGroupByHistogram.attributeTypeMap;

  }

  public constructor() {











  }
}










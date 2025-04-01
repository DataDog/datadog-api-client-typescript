/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A timeseries point.
*/
export class CIAppAggregateBucketValueTimeseriesPoint {
  /**
   * The time value for this point.
  */
  "time"?: Date;
  /**
   * The value for this point.
  */
  "value"?: number;

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
    "time": {
      "baseName": "time",
      "type": "Date",
      "format": "date-time",
    },
    "value": {
      "baseName": "value",
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




    return CIAppAggregateBucketValueTimeseriesPoint.attributeTypeMap;

  }

  public constructor() {











  }
}










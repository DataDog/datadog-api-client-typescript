/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The most recent actual start and end dates for a recurring downtime. For a canceled downtime,
 * this is the previously occurring downtime. For active downtimes, this is the ongoing downtime, and for scheduled
 * downtimes it is the upcoming downtime.
*/
export class DowntimeScheduleCurrentDowntimeResponse {
  /**
   * The end of the current downtime.
  */
  "end"?: Date;
  /**
   * The start of the current downtime.
  */
  "start"?: Date;

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
    "end": {
      "baseName": "end",
      "type": "Date",
      "format": "date-time",
    },
    "start": {
      "baseName": "start",
      "type": "Date",
      "format": "date-time",
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




    return DowntimeScheduleCurrentDowntimeResponse.attributeTypeMap;

  }

  public constructor() {











  }
}










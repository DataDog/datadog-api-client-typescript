/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A one-time downtime definition.
*/
export class DowntimeScheduleOneTimeResponse {
  /**
   * ISO-8601 Datetime to end the downtime.
  */
  "end"?: Date;
  /**
   * ISO-8601 Datetime to start the downtime.
  */
  "start": Date;

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
      "required": true,
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




    return DowntimeScheduleOneTimeResponse.attributeTypeMap;

  }

  public constructor() {











  }
}










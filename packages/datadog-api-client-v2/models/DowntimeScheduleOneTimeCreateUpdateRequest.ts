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
export class DowntimeScheduleOneTimeCreateUpdateRequest {
  /**
   * ISO-8601 Datetime to end the downtime. Must include a UTC offset of zero. If not provided, the
   * downtime continues forever.
  */
  "end"?: Date;
  /**
   * ISO-8601 Datetime to start the downtime. Must include a UTC offset of zero. If not provided, the
   * downtime starts the moment it is created.
  */
  "start"?: Date;

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
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return DowntimeScheduleOneTimeCreateUpdateRequest.attributeTypeMap;

  }

  public constructor() {











  }
}










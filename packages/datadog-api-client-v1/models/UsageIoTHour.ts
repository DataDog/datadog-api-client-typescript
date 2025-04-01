/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * IoT usage for a given organization for a given hour.
*/
export class UsageIoTHour {
  /**
   * The hour for the usage.
  */
  "hour"?: Date;
  /**
   * The total number of IoT devices during a given hour.
  */
  "iotDeviceCount"?: number;
  /**
   * The organization name.
  */
  "orgName"?: string;
  /**
   * The organization public ID.
  */
  "publicId"?: string;

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
    "hour": {
      "baseName": "hour",
      "type": "Date",
      "format": "date-time",
    },
    "iotDeviceCount": {
      "baseName": "iot_device_count",
      "type": "number",
      "format": "int64",
    },
    "orgName": {
      "baseName": "org_name",
      "type": "string",
    },
    "publicId": {
      "baseName": "public_id",
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




    return UsageIoTHour.attributeTypeMap;

  }

  public constructor() {











  }
}










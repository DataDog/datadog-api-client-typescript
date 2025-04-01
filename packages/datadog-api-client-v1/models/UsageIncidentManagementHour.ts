/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Incident management usage for a given organization for a given hour.
*/
export class UsageIncidentManagementHour {
  /**
   * The hour for the usage.
  */
  "hour"?: Date;
  /**
   * Contains the total number monthly active users from the start of the given hour's month until the given hour.
  */
  "monthlyActiveUsers"?: number;
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
    "monthlyActiveUsers": {
      "baseName": "monthly_active_users",
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




    return UsageIncidentManagementHour.attributeTypeMap;

  }

  public constructor() {











  }
}










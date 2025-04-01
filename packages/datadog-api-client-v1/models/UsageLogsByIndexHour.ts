/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Number of indexed logs for each hour and index for a given organization.
*/
export class UsageLogsByIndexHour {
  /**
   * The total number of indexed logs for the queried hour.
  */
  "eventCount"?: number;
  /**
   * The hour for the usage.
  */
  "hour"?: Date;
  /**
   * The index ID for this usage.
  */
  "indexId"?: string;
  /**
   * The user specified name for this index ID.
  */
  "indexName"?: string;
  /**
   * The organization name.
  */
  "orgName"?: string;
  /**
   * The organization public ID.
  */
  "publicId"?: string;
  /**
   * The retention period (in days) for this index ID.
  */
  "retention"?: number;

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
    "eventCount": {
      "baseName": "event_count",
      "type": "number",
      "format": "int64",
    },
    "hour": {
      "baseName": "hour",
      "type": "Date",
      "format": "date-time",
    },
    "indexId": {
      "baseName": "index_id",
      "type": "string",
    },
    "indexName": {
      "baseName": "index_name",
      "type": "string",
    },
    "orgName": {
      "baseName": "org_name",
      "type": "string",
    },
    "publicId": {
      "baseName": "public_id",
      "type": "string",
    },
    "retention": {
      "baseName": "retention",
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




    return UsageLogsByIndexHour.attributeTypeMap;

  }

  public constructor() {











  }
}










/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Sensitive Data Scanner usage for a given organization for a given hour.
*/
export class UsageSDSHour {
  /**
   * The total number of bytes scanned of APM usage across all usage types by the Sensitive Data Scanner from the start of the given hour’s month until the given hour.
  */
  "apmScannedBytes"?: number;
  /**
   * The total number of bytes scanned of Events usage across all usage types by the Sensitive Data Scanner from the start of the given hour’s month until the given hour.
  */
  "eventsScannedBytes"?: number;
  /**
   * The hour for the usage.
  */
  "hour"?: Date;
  /**
   * The total number of bytes scanned of logs usage by the Sensitive Data Scanner from the start of the given hour’s month until the given hour.
  */
  "logsScannedBytes"?: number;
  /**
   * The organization name.
  */
  "orgName"?: string;
  /**
   * The organization public ID.
  */
  "publicId"?: string;
  /**
   * The total number of bytes scanned of RUM usage across all usage types by the Sensitive Data Scanner from the start of the given hour’s month until the given hour.
  */
  "rumScannedBytes"?: number;
  /**
   * The total number of bytes scanned across all usage types by the Sensitive Data Scanner from the start of the given hour’s month until the given hour.
  */
  "totalScannedBytes"?: number;

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
    "apmScannedBytes": {
      "baseName": "apm_scanned_bytes",
      "type": "number",
      "format": "int64",
    },
    "eventsScannedBytes": {
      "baseName": "events_scanned_bytes",
      "type": "number",
      "format": "int64",
    },
    "hour": {
      "baseName": "hour",
      "type": "Date",
      "format": "date-time",
    },
    "logsScannedBytes": {
      "baseName": "logs_scanned_bytes",
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
    "rumScannedBytes": {
      "baseName": "rum_scanned_bytes",
      "type": "number",
      "format": "int64",
    },
    "totalScannedBytes": {
      "baseName": "total_scanned_bytes",
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




    return UsageSDSHour.attributeTypeMap;

  }

  public constructor() {











  }
}










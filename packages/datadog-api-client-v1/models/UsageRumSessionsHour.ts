/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Number of RUM sessions recorded for each hour for a given organization.
*/
export class UsageRumSessionsHour {
  /**
   * The hour for the usage.
  */
  "hour"?: Date;
  /**
   * The organization name.
  */
  "orgName"?: string;
  /**
   * The organization public ID.
  */
  "publicId"?: string;
  /**
   * Contains the number of RUM Session Replay counts (data available beginning November 1, 2021).
  */
  "replaySessionCount"?: number;
  /**
   * Contains the number of browser RUM lite Sessions.
  */
  "sessionCount"?: number;
  /**
   * Contains the number of mobile RUM sessions on Android (data available beginning December 1, 2020).
  */
  "sessionCountAndroid"?: number;
  /**
   * Contains the number of mobile RUM sessions on Flutter (data available beginning March 1, 2023).
  */
  "sessionCountFlutter"?: number;
  /**
   * Contains the number of mobile RUM sessions on iOS (data available beginning December 1, 2020).
  */
  "sessionCountIos"?: number;
  /**
   * Contains the number of mobile RUM sessions on React Native (data available beginning May 1, 2022).
  */
  "sessionCountReactnative"?: number;

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
    "orgName": {
      "baseName": "org_name",
      "type": "string",
    },
    "publicId": {
      "baseName": "public_id",
      "type": "string",
    },
    "replaySessionCount": {
      "baseName": "replay_session_count",
      "type": "number",
      "format": "int64",
    },
    "sessionCount": {
      "baseName": "session_count",
      "type": "number",
      "format": "int64",
    },
    "sessionCountAndroid": {
      "baseName": "session_count_android",
      "type": "number",
      "format": "int64",
    },
    "sessionCountFlutter": {
      "baseName": "session_count_flutter",
      "type": "number",
      "format": "int64",
    },
    "sessionCountIos": {
      "baseName": "session_count_ios",
      "type": "number",
      "format": "int64",
    },
    "sessionCountReactnative": {
      "baseName": "session_count_reactnative",
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




    return UsageRumSessionsHour.attributeTypeMap;

  }

  public constructor() {











  }
}










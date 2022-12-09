/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Number of RUM Sessions recorded for each hour for a given organization.
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
   * Contains the number of RUM Replay Sessions (data available beginning November 1, 2021).
   */
  "replaySessionCount"?: number;
  /**
   * Contains the number of browser RUM Lite Sessions.
   */
  "sessionCount"?: number;
  /**
   * Contains the number of mobile RUM Sessions on Android (data available beginning December 1, 2020).
   */
  "sessionCountAndroid"?: number;
  /**
   * Contains the number of mobile RUM Sessions on iOS (data available beginning December 1, 2020).
   */
  "sessionCountIos"?: number;
  /**
   * Contains the number of mobile RUM Sessions on React Native (data available beginning May 1, 2022).
   */
  "sessionCountReactnative"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    replaySessionCount: {
      baseName: "replay_session_count",
      type: "number",
      format: "int64",
    },
    sessionCount: {
      baseName: "session_count",
      type: "number",
      format: "int64",
    },
    sessionCountAndroid: {
      baseName: "session_count_android",
      type: "number",
      format: "int64",
    },
    sessionCountIos: {
      baseName: "session_count_ios",
      type: "number",
      format: "int64",
    },
    sessionCountReactnative: {
      baseName: "session_count_reactnative",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageRumSessionsHour.attributeTypeMap;
  }

  public constructor() {}
}

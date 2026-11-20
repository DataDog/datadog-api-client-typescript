/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMRetentionQuotaReachedAction } from "./RUMRetentionQuotaReachedAction";
import { RUMRetentionQuotaWindowType } from "./RUMRetentionQuotaWindowType";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The configuration used when `mode` is `custom`.
 */
export class RUMRetentionQuotaCustomConfig {
  /**
   * The time of day when the daily quota resets, in `HH:MM` 24-hour format.
   */
  "dailyResetTime": string;
  /**
   * The timezone offset used for the daily reset time, in `±HH:MM` format.
   */
  "dailyResetTimezone": string;
  /**
   * The action to take when the session quota is reached.
   */
  "quotaReachedAction": RUMRetentionQuotaReachedAction;
  /**
   * The maximum number of sessions allowed within the window. Must be at least `1000`.
   */
  "sessionLimit": Int64;
  /**
   * The window type over which the session limit is enforced.
   */
  "windowType": RUMRetentionQuotaWindowType;

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
    dailyResetTime: {
      baseName: "daily_reset_time",
      type: "string",
      required: true,
    },
    dailyResetTimezone: {
      baseName: "daily_reset_timezone",
      type: "string",
      required: true,
    },
    quotaReachedAction: {
      baseName: "quota_reached_action",
      type: "RUMRetentionQuotaReachedAction",
      required: true,
    },
    sessionLimit: {
      baseName: "session_limit",
      type: "number",
      required: true,
      format: "int64",
    },
    windowType: {
      baseName: "window_type",
      type: "RUMRetentionQuotaWindowType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMRetentionQuotaCustomConfig.attributeTypeMap;
  }

  public constructor() {}
}

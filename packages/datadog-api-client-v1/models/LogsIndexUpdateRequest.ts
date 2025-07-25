/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsDailyLimitReset } from "./LogsDailyLimitReset";
import { LogsExclusion } from "./LogsExclusion";
import { LogsFilter } from "./LogsFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for updating a Datadog Log index.
 */
export class LogsIndexUpdateRequest {
  /**
   * The number of log events you can send in this index per day before you are rate-limited.
   */
  "dailyLimit"?: number;
  /**
   * Object containing options to override the default daily limit reset time.
   */
  "dailyLimitReset"?: LogsDailyLimitReset;
  /**
   * A percentage threshold of the daily quota at which a Datadog warning event is generated.
   */
  "dailyLimitWarningThresholdPercentage"?: number;
  /**
   * If true, sets the `daily_limit` value to null and the index is not limited on a daily basis (any
   * specified `daily_limit` value in the request is ignored). If false or omitted, the index's current
   * `daily_limit` is maintained.
   */
  "disableDailyLimit"?: boolean;
  /**
   * An array of exclusion objects. The logs are tested against the query of each filter,
   * following the order of the array. Only the first matching active exclusion matters,
   * others (if any) are ignored.
   */
  "exclusionFilters"?: Array<LogsExclusion>;
  /**
   * Filter for logs.
   */
  "filter": LogsFilter;
  /**
   * The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.
   * If Standard Tier is enabled on this index, logs are first retained in Standard Tier for the number of days specified through `num_retention_days`,
   * and then stored in Flex Tier until the number of days specified in `num_flex_logs_retention_days` is reached.
   * The available values depend on retention plans specified in your organization's contract/subscriptions.
   *
   * **Note**: Changing this value affects all logs already in this index. It may also affect billing.
   */
  "numFlexLogsRetentionDays"?: number;
  /**
   * The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.
   * The available values depend on retention plans specified in your organization's contract/subscriptions.
   *
   * **Note**: Changing this value affects all logs already in this index. It may also affect billing.
   */
  "numRetentionDays"?: number;

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
    dailyLimit: {
      baseName: "daily_limit",
      type: "number",
      format: "int64",
    },
    dailyLimitReset: {
      baseName: "daily_limit_reset",
      type: "LogsDailyLimitReset",
    },
    dailyLimitWarningThresholdPercentage: {
      baseName: "daily_limit_warning_threshold_percentage",
      type: "number",
      format: "double",
    },
    disableDailyLimit: {
      baseName: "disable_daily_limit",
      type: "boolean",
    },
    exclusionFilters: {
      baseName: "exclusion_filters",
      type: "Array<LogsExclusion>",
    },
    filter: {
      baseName: "filter",
      type: "LogsFilter",
      required: true,
    },
    numFlexLogsRetentionDays: {
      baseName: "num_flex_logs_retention_days",
      type: "number",
      format: "int64",
    },
    numRetentionDays: {
      baseName: "num_retention_days",
      type: "number",
      format: "int64",
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
    return LogsIndexUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}

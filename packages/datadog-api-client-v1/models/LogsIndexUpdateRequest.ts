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
   * The number of days logs are kept in Flex Logs (inclusive of Indexing) before they are deleted.
   * The values available are 30, 60, 90, 180, 360, and 450 days.
   *
   * **Note:** Changing the retention for an index adjusts the length of retention for all Flex logs
   * already in this index. It may also affect billing.
   * If using Flex Starter, then only 180, 360, and 450 days options are available.
   */
  "numFlexLogsRetentionDays"?: number;
  /**
   * The number of days before logs are kept in Standard Indexing before they are either deleted or retained in Flex Logs.
   * Available values depend on retention plans specified in your organization's contract / subscriptions.
   *
   * **Note:** Changing the retention for an index adjusts the length of retention for all logs
   * already in this index. It may also affect billing.
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
      type: "any",
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

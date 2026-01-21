import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsDailyLimitReset } from "./LogsDailyLimitReset";
import { LogsExclusion } from "./LogsExclusion";
import { LogsFilter } from "./LogsFilter";

/**
 * Object describing a Datadog Log index.
 */
export class LogsIndex {
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
   * A boolean stating if the index is rate limited, meaning more logs than the daily limit have been sent.
   * Rate limit is reset every-day at 2pm UTC.
   */
  "isRateLimited"?: boolean;
  /**
   * The name of the index.
   */
  "name": string;
  /**
   * The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.
   * If Standard Tier is enabled on this index, logs are first retained in Standard Tier for the number of days specified through `num_retention_days`,
   * and then stored in Flex Tier until the number of days specified in `num_flex_logs_retention_days` is reached.
   * The available values depend on retention plans specified in your organization's contract/subscriptions.
   */
  "numFlexLogsRetentionDays"?: number;
  /**
   * The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.
   * The available values depend on retention plans specified in your organization's contract/subscriptions.
   */
  "numRetentionDays"?: number;
  /**
   * A list of tags associated with the index. Tags must be in `key:value` format.
   */
  "tags"?: Array<string>;
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
    exclusionFilters: {
      baseName: "exclusion_filters",
      type: "Array<LogsExclusion>",
    },
    filter: {
      baseName: "filter",
      type: "LogsFilter",
      required: true,
    },
    isRateLimited: {
      baseName: "is_rate_limited",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
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
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return LogsIndex.attributeTypeMap;
  }

  public constructor() {}
}

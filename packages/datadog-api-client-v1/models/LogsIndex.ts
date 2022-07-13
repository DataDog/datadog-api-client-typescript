/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsExclusion } from "./LogsExclusion";
import { LogsFilter } from "./LogsFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a Datadog Log index.
 */
export class LogsIndex {
  /**
   * The number of log events you can send in this index per day before you are rate-limited.
   */
  "dailyLimit"?: number;
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
   * The number of days before logs are deleted from this index. Available values depend on
   * retention plans specified in your organization's contract/subscriptions.
   */
  "numRetentionDays"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dailyLimit: {
      baseName: "daily_limit",
      type: "number",
      format: "int64",
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
    numRetentionDays: {
      baseName: "num_retention_days",
      type: "number",
      format: "int64",
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

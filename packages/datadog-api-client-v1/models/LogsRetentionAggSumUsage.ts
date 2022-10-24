/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object containing indexed logs usage aggregated across organizations and months for a retention period.
 */
export class LogsRetentionAggSumUsage {
  /**
   * Total indexed logs for this retention period.
   */
  "logsIndexedLogsUsageAggSum"?: number;
  /**
   * Live indexed logs for this retention period.
   */
  "logsLiveIndexedLogsUsageAggSum"?: number;
  /**
   * Rehydrated indexed logs for this retention period.
   */
  "logsRehydratedIndexedLogsUsageAggSum"?: number;
  /**
   * The retention period in days or "custom" for all custom retention periods.
   */
  "retention"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    logsIndexedLogsUsageAggSum: {
      baseName: "logs_indexed_logs_usage_agg_sum",
      type: "number",
      format: "int64",
    },
    logsLiveIndexedLogsUsageAggSum: {
      baseName: "logs_live_indexed_logs_usage_agg_sum",
      type: "number",
      format: "int64",
    },
    logsRehydratedIndexedLogsUsageAggSum: {
      baseName: "logs_rehydrated_indexed_logs_usage_agg_sum",
      type: "number",
      format: "int64",
    },
    retention: {
      baseName: "retention",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsRetentionAggSumUsage.attributeTypeMap;
  }

  public constructor() {}
}

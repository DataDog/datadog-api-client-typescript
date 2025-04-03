import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object containing indexed logs usage grouped by retention period and summed.
 */
export class LogsRetentionSumUsage {
  /**
   * Total indexed logs for this retention period.
   */
  "logsIndexedLogsUsageSum"?: number;
  /**
   * Live indexed logs for this retention period.
   */
  "logsLiveIndexedLogsUsageSum"?: number;
  /**
   * Rehydrated indexed logs for this retention period.
   */
  "logsRehydratedIndexedLogsUsageSum"?: number;
  /**
   * The retention period in days or "custom" for all custom retention periods.
   */
  "retention"?: string;
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
    logsIndexedLogsUsageSum: {
      baseName: "logs_indexed_logs_usage_sum",
      type: "number",
      format: "int64",
    },
    logsLiveIndexedLogsUsageSum: {
      baseName: "logs_live_indexed_logs_usage_sum",
      type: "number",
      format: "int64",
    },
    logsRehydratedIndexedLogsUsageSum: {
      baseName: "logs_rehydrated_indexed_logs_usage_sum",
      type: "number",
      format: "int64",
    },
    retention: {
      baseName: "retention",
      type: "string",
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
    return LogsRetentionSumUsage.attributeTypeMap;
  }

  public constructor() {}
}

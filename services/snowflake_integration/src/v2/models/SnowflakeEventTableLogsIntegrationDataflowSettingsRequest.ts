import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the event table dataflow. Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`. Only the fields provided are changed.
 */
export class SnowflakeEventTableLogsIntegrationDataflowSettingsRequest {
  /**
   * Whether records with a `record_type` of `event` are collected. Defaults to `false`.
   */
  "eventTableEventsEnabled"?: boolean;
  /**
   * Whether records with a `record_type` of `log` are collected. Defaults to `false`.
   */
  "eventTableLogsEnabled"?: boolean;
  /**
   * How often event table records are collected, in minutes. One of `5`, `15`, `30`, `60`, or `1440`. Defaults to `5`.
   */
  "eventTableLogsIntervalMin"?: number;
  /**
   * Whether records with a `record_type` of `span_event` are collected. Defaults to `false`.
   */
  "eventTableSpanEventsEnabled"?: boolean;
  /**
   * Whether records with a `record_type` of `span` are collected. Defaults to `false`.
   */
  "eventTableSpansEnabled"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    eventTableEventsEnabled: {
      baseName: "event_table_events_enabled",
      type: "boolean",
    },
    eventTableLogsEnabled: {
      baseName: "event_table_logs_enabled",
      type: "boolean",
    },
    eventTableLogsIntervalMin: {
      baseName: "event_table_logs_interval_min",
      type: "number",
      format: "int64",
    },
    eventTableSpanEventsEnabled: {
      baseName: "event_table_span_events_enabled",
      type: "boolean",
    },
    eventTableSpansEnabled: {
      baseName: "event_table_spans_enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeEventTableLogsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}

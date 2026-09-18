import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the event table dataflow. Each record type is collected independently so that you can control ingestion costs, and every record type is ingested into Datadog as logs tagged with its `record_type`.
 */
export class SnowflakeEventTableLogsIntegrationDataflowSettingsResponse {
  /**
   * Whether records with a `record_type` of `event` are collected.
   */
  "eventTableEventsEnabled"?: boolean;
  /**
   * Whether records with a `record_type` of `log` are collected.
   */
  "eventTableLogsEnabled"?: boolean;
  /**
   * How often event table records are collected, in minutes.
   */
  "eventTableLogsIntervalMin"?: number;
  /**
   * Whether records with a `record_type` of `span_event` are collected.
   */
  "eventTableSpanEventsEnabled"?: boolean;
  /**
   * Whether records with a `record_type` of `span` are collected.
   */
  "eventTableSpansEnabled"?: boolean;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeEventTableLogsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}

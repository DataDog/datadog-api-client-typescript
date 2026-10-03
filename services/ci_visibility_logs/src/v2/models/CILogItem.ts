import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CILogAttributeValue } from "./CILogAttributeValue";

/**
 * A CI job log line.
 */
export class CILogItem {
  /**
   * Comma-separated tags in `key:value` format. A log can have up to 256 tags, including repeated keys.
   */
  "ddtags"?: string;
  /**
   * The job event's `resource.id`, sent through the CI Visibility pipeline API.
   */
  "jobId": string;
  /**
   * The line number in the job log. Use 0 or 1 for the first line.
   */
  "lineNumber"?: number;
  /**
   * The non-empty log line message.
   */
  "message": string;
  /**
   * The `resource.unique_id` of the pipeline event, which must also match the job event's
   * `resource.pipeline_unique_id`.
   */
  "pipelineUniqueId": string;
  /**
   * The provider name sent with the pipeline event. It defaults to `custom` when omitted and, when provided,
   * must be non-empty and cannot contain a comma.
   */
  "providerName"?: string;
  /**
   * The provider-defined section containing this log line, used to display collapsible groups of lines in the CI
   * job log view.
   */
  "sectionName"?: string;
  /**
   * The status of this log line. Any string is accepted. Datadog maps non-empty values to a standard log status.
   * See [status mapping](https://docs.datadoghq.com/logs/log_configuration/processors/log_status_remapper/).
   */
  "status"?: string;
  /**
   * The log line time in RFC 3339 format with an explicit timezone. If omitted, the intake time is used. It can
   * be at most 18 hours in the past or 12 hours in the future.
   */
  "timestamp"?: Date;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: CILogAttributeValue };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddtags: {
      baseName: "ddtags",
      type: "string",
    },
    jobId: {
      baseName: "job_id",
      type: "string",
      required: true,
    },
    lineNumber: {
      baseName: "line_number",
      type: "number",
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    pipelineUniqueId: {
      baseName: "pipeline_unique_id",
      type: "string",
      required: true,
    },
    providerName: {
      baseName: "provider_name",
      type: "string",
    },
    sectionName: {
      baseName: "section_name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: CILogAttributeValue; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CILogItem.attributeTypeMap;
  }

  public constructor() {}
}

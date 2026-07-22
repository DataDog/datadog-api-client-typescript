import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetReportScheduleResourceType } from "./DatasetReportScheduleResourceType";
import { ReportScheduleStatus } from "./ReportScheduleStatus";

/**
 * The configuration and derived state of a report schedule for a published dataset.
 */
export class DatasetReportScheduleResponseAttributes {
  /**
   * The identifier of the notebook cell that published the dataset, or `null` if not set.
   */
  "cellId": string|null;
  /**
   * The identifier of the dataset, or `null` if not set.
   */
  "datasetId": string|null;
  /**
   * The description of the report.
   */
  "description": string;
  /**
   * The maximum number of rows included in the attached CSV file, or `null` if not set.
   */
  "fileRowLimit": number|null;
  /**
   * The maximum number of rows included inline in the email body, or `null` if not set.
   */
  "inlineRowLimit": number|null;
  /**
   * The Unix timestamp, in milliseconds, of the next scheduled delivery, or
   * `null` if none is scheduled.
   */
  "nextRecurrence": number|null;
  /**
   * The identifier of the notebook containing the dataset cell, or `null` if not set.
   */
  "notebookId": number|null;
  /**
   * The recipients of the report (email addresses, Slack channel references, or
   * Microsoft Teams channel references).
   */
  "recipients": Array<string>;
  /**
   * The identifier of the widget containing the dataset.
   */
  "resourceId": string;
  /**
   * The type of resource targeted by a dataset report schedule.
   */
  "resourceType": DatasetReportScheduleResourceType;
  /**
   * The recurrence rule for the schedule, expressed as an iCalendar `RRULE` string.
   */
  "rrule": string;
  /**
   * Whether the schedule is currently delivering reports (`active`) or paused (`inactive`).
   */
  "status": ReportScheduleStatus;
  /**
   * The relative timeframe of data included in the report.
   */
  "timeframe": string;
  /**
   * The IANA time zone identifier the recurrence rule is evaluated in.
   */
  "timezone": string;
  /**
   * The title of the report.
   */
  "title": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cellId: {
      baseName: "cell_id",
      type: "string",
      required: true,
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    fileRowLimit: {
      baseName: "file_row_limit",
      type: "number",
      required: true,
      format: "int64",
    },
    inlineRowLimit: {
      baseName: "inline_row_limit",
      type: "number",
      required: true,
      format: "int64",
    },
    nextRecurrence: {
      baseName: "next_recurrence",
      type: "number",
      required: true,
      format: "int64",
    },
    notebookId: {
      baseName: "notebook_id",
      type: "number",
      required: true,
      format: "int64",
    },
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
      required: true,
    },
    resourceId: {
      baseName: "resource_id",
      type: "string",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "DatasetReportScheduleResourceType",
      required: true,
    },
    rrule: {
      baseName: "rrule",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "ReportScheduleStatus",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "string",
      required: true,
    },
    timezone: {
      baseName: "timezone",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return DatasetReportScheduleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
